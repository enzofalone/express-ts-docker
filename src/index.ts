import { ApolloServer, gql } from "apollo-server";
import { categories, products } from "./db";
import { typeDefs } from "./schema";
import { Query } from "./resolvers/Query";
import { Category } from "./resolvers/Category";
import { Product } from "./resolvers/Product";

export interface QueryProductArgs {
  id: String;
}

export interface QueryCategoryArgs {
  id: String;
}

const resolvers = {
  Query,
  Category,
  Product,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { categories, products },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
