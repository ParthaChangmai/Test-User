import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { UserData } from "@/store/model/loginUser";
import { IDispatch, IRootState } from "@/store/store";

export default function LoginForm() {
  const dispatch: IDispatch = useDispatch();
  const formState = useSelector((state: IRootState) => state.loginUserModel);
  const navigate = useNavigate();

  function HandleSubmit() {
    if (UserData.password === formState.password && UserData.user === formState.name) {
      dispatch.loginUserModel.HandleToken("test-token123456789");
      return navigate("/products");
    } else return alert("Please enter correct details");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h1>Login Form</h1>
      <input
        placeholder="user name"
        value={formState.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.loginUserModel.HandleName(e.target.value)
        }
      />

      <input
        placeholder="password"
        value={formState.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.loginUserModel.HandlePassword(e.target.value)
        }
      />
      <input type={"button"} placeholder="submit" value={"submit"} onClick={HandleSubmit} />
    </div>
  );
}
