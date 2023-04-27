import { QueryProductArgs, QueryCategoryArgs } from "..";
import { products, categories } from "../db";

export const Query = {
    hello: () => {
      return "world!";
    },
    helloNumber: () => {
      return 7;
    },
    helloArray: () => {
      return ["Hello", "Hello2", "Hello3"];
    },
    products: () => products,
    product: (parent: any, args: QueryProductArgs) => {
      const productId = args.id;

      return products.find((product) => product.id === productId) || null;
    },
    categories: () => categories,
    category: (parent: any, args: QueryCategoryArgs) => {
      const categoryId = args.id;

      return categories.find((category) => category.id === categoryId) || null;
    },
  }