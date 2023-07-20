/* eslint-disable @typescript-eslint/no-explicit-any */
export type IInitialProductState = {
  total: number;
  skip: number;
  limit: number;
  products?: Array<any>;
  loading?: boolean;
  error: unknown;
  selectedProduct?: any;
};
