import { QueryProductArgs, QueryCategoryArgs } from "..";

export const Query = {
  hello: () => {
    return "world!";
  },
  products: (parent: any, args: any, { products }: any) => products,
  product: (
    parent: any,
    { id: productId }: QueryProductArgs,
    { products }: any
  ) => {
    return products.find((product: any) => product.id === productId) || null;
  },
  categories: (parent: any, args: any, { categories }: any) => categories,
  category: (
    parent: any,
    { id: categoryId }: QueryCategoryArgs,
    { categories }: any
  ) => {
    return (
      categories.find((category: any) => category.id === categoryId) || null
    );
  },
};
