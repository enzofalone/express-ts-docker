import { QueryProductArgs } from "..";

export const Product = {
    category: ({categoryId}: any, args: QueryProductArgs, {categories}: any) => {

      return categories.find((category: any) => category.id === categoryId) || null;
    },
  }