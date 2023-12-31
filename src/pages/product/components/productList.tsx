import { Button, Loading } from "@components";
import { useProductList } from "@hooks";
import { NavigateFunction, useNavigate } from "react-router-dom";

export default function ProductList(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  const { data, isLoading, isError } = useProductList();

  function HandleNavigation(id: number) {
    navigate(`/products/${id}`);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>please try again something is wrong</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
      {data?.products
        ? data?.products.map((el) => {
            return (
              <div key={el.id}>
                <p>{el.title}</p>

                <Button key={el.id} label={"Add to cart"} />
              </div>
            );
          })
        : "no products found"}
    </div>
  );
}
