export type User = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    plz: number;
    city: string;
  };
  userType: UserType;
};

export enum UserType {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}
