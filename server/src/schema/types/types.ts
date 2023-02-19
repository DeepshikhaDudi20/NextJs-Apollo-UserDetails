export interface User {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
}

export interface UserResponse {
    users: User[];
    hasNextPage: boolean;
}

export interface UsersListArgs {
  count: number;
  page: number;
}