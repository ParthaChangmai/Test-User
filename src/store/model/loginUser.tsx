/* eslint-disable @typescript-eslint/naming-convention */
import { createModel } from "@rematch/core";

import { IRootModel } from "./index";

type IInitialState = {
  name: string;
  password: string;
  token?: string;
};

export const UserData = {
  user: "TestUser",
  password: "TestPassword123",
};

const initialState: IInitialState = {
  name: "",
  password: "",
};

export const loginUserModel = createModel<IRootModel>()({
  state: initialState,
  reducers: {
    HandleName(state, payload: string) {
      return {
        ...state,
        name: payload,
      };
    },
    HandlePassword(state, payload: string) {
      return {
        ...state,
        password: payload,
      };
    },
    HandleToken(state, payload: string) {
      return {
        ...state,
        token: payload,
      };
    },

    ResetForm() {
      return {
        ...initialState,
      };
    },
  },
});
