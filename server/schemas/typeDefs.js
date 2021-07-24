const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }
  type Restaurant {
    _id: ID
    name: String
    description: String
    image: String
    price: Int
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    userName: String
    email: String
    orders: [Order]
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }
  // Type Queries
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    me: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
// Mutations
  type Mutation {
    addUser(
      userName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      userName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
