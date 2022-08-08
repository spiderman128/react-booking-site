import axios from 'axios';

export const GET = async (api: string, params?: any, header?: any) => {
  return await axios.get(api, { headers: header, params });
};

export const POST = async (api: string, params?: any, header?: any) => {
  return await axios.post(api, params, { headers: header });
};

export const PUT = async (api: string, params?: any, header?: any) => {
  return await axios.put(api, params, { headers: header });
};
