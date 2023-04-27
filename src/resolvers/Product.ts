import { QueryProductArgs } from "..";
import { categories } from "../db";

export const Product = {
    category: (parent: any, args: QueryProductArgs) => {
      const categoryId = parent.categoryId;

      return categories.find((category) => category.id === categoryId) || null;
    },
  }