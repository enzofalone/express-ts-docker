import { QueryProductArgs } from "..";

export const Category = {
  products: (
    { id: categoryId }: any,
    args: QueryProductArgs,
    { products }: any
  ) => {
    return (
      products.filter((product: any) => product.categoryId === categoryId) || []
    );
  },
};
