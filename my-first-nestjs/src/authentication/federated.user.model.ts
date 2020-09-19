export class FederatedUserModel {
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  enabled: boolean;
  firstName: string;
  lastName: string;
  //attributes: FederatedUserAttribute[];
  attributes: any;
  roles: string[];
}