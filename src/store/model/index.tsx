import { Models } from "@rematch/core";

import { loginUserModel } from "./loginUser";
import productModel from "./products";

export interface IRootModel extends Models<IRootModel> {
  productModel: typeof productModel;

  loginUserModel: typeof loginUserModel;
}

export const models: IRootModel = { productModel, loginUserModel };
