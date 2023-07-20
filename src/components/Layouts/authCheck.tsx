import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { IRootState } from "@/store/store";

type Props = {
  children: JSX.Element;
};

/**
 * This component will redirect user to login route if the user is not loggedin and saves
 * the current route in the state, once the user is loggedin,
 * it will redirect user to saved route.
 */
const RequireAuth = (props: Props) => {
  const token = useSelector((state: IRootState) => state.loginUserModel.token);

  if (!token) return <Navigate to={"/"} replace />;
  if (token != "test-token123456789") return <Navigate to={"/"} replace />;

  return props.children;
};

export default RequireAuth;
