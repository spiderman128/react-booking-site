import { APIS } from '../utils/urls';
import { GET, POST } from './axios.services';
import { buildFormRequestData } from '../utils';

export const getCreateClientForms = async () => {
  return await GET(`${APIS.client.getCreateClientForms}`);
};

export const createNewClient = async (formData: any) => {
  const data = buildFormRequestData(formData);

  return await POST(`${APIS.client.createNewClient}`, data);
};