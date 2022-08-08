import { ICredential, IUserData } from './user.interface';
import IResponse from './response.interface';
import { ICreateClientForm } from './client.interface';

export interface ApiTypes {
  auth: {
    login: (params: ICredential) => IResponse<IUserData>;
    self: () => IResponse<IUserData>;
    getRegisterForms: () => IResponse<ICreateClientForm>;
    register: (formData: any) => IResponse<any>;
  };
  client: {
    getCreateClientForms: () => IResponse<ICreateClientForm>;
    createNewClient: (forms: any) => IResponse<any>;
  };
}
