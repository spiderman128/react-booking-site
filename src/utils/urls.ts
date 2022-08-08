export const BASE_URL = process.env.REACT_APP_API_SERVER;
// export const BASE_URL = 'https://app.meinewohnrente.de/api';

export const APIS = {
  auth: {
    login: `${BASE_URL}/v1/login`,
    self: `${BASE_URL}/v1/user/self`,
    getRegisterForms: `${BASE_URL}/v2/form/steps_register`,
    register: `${BASE_URL}/v1/register`,
  },
  client: {
    getCreateClientForms: `${BASE_URL}/v2/form/steps_createCustomer`,
    createNewClient: `${BASE_URL}/v2/form/steps_createCustomer`,
  },
};