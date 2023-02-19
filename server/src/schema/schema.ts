import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    User: User
    UsersList(count: Int, page: Int): UserResponse
  }

  type UserResponse {
    users: [User]
    hasNextPage: Boolean
  }

  type User {
    name: String
    email: String
    phoneNumber: String
    address: String
  }
`;

export default typeDefs;
