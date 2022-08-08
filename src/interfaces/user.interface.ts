import { IAddressData } from './address.interface';
import { IFile } from './file.interface';

export interface IUserData {
  isLoaded?: boolean;
  id: number;
  username: string;
  username_canonical: string;
  email: string;
  email_canonical: string;
  enabled: boolean;
  opt_in: boolean;
  is_external_agent: boolean;
  salt: string;
  password: string;
  last_login: string;
  roles: string[];
  image: IFile;

  company: string;
  first_name: string;
  last_name: string;
  address: IAddressData;
}

export interface ICredential {
  email: string;
  plainPassword: string;
}