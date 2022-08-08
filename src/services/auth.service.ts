import { GET, POST } from './axios.services';
import { APIS } from '../utils/urls';
import { buildFormRequestData } from '../utils';

export const login = async (params: any, headerData: any) => {
  return await POST(
    `${APIS.auth.login}`,
    params,
    headerData,
  );
};

export const self = async (params: any, headerData: any) => {
  return await GET(
    `${APIS.auth.self}`,
    params,
    headerData,
  )
};

export const getRegisterForms = async () => {
  return await GET(`${APIS.auth.getRegisterForms}`)
};

export const register = async (formData) => {
  const data = buildFormRequestData(formData);

  return await POST(`${APIS.auth.register}`, data);
};