export type User = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: UserType;
};

export enum UserType {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}
