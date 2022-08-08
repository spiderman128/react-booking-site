import { AxiosResponse } from 'axios';

export interface IResponseData<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export default interface IResponse<T> extends AxiosResponse<any> {
  data: IResponseData<T>;
}
