import { QueryProductArgs } from "..";
import { products } from "../db";

export const Category = {
    products: (parent: any, args: QueryProductArgs) => {
      const categoryId = parent.id;

      return (
        products.filter((product) => product.categoryId === categoryId) || []
      );
    },
  }