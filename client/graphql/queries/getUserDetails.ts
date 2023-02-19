import { gql } from '@apollo/client';

export const getUserDetails = gql`
  query UsersList($count: Int, $page: Int) {
    UsersList(count: $count, page: $page) {
      users {
        address
        phoneNumber
        email
        name
      }
      hasNextPage
    }
  }
`;