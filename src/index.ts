import { ApolloServer, gql } from "apollo-server";
import { categories, products } from "./db";

const typeDefs = gql`
  type Query {
    hello: String
    helloNumber: Int
    helloArray: [String!]!
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

interface QueryProductArgs {
  id: String;
}

interface QueryCategoryArgs {
  id: String;
}

const resolvers = {
  Query: {
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
  },
  Category: {
    products: (parent: any, args: QueryProductArgs) => {
      console.log(parent);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
