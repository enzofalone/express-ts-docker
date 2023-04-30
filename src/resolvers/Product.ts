import { QueryProductArgs } from "..";

export const Product = {
  category: (
    { categoryId }: any,
    args: QueryProductArgs,
    { categories }: any
  ) => {
    return (
      categories.find((category: any) => category.id === categoryId) || null
    );
  },
  reviews: (
    { id: productId }: any,
    args: QueryProductArgs,
    { reviews }: any
  ) => {
    return reviews.filter((review: any) => review.productId === productId);
  },
};
