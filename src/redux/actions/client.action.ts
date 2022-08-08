import { ThunkDispatch } from 'redux-thunk';

import { ApiTypes } from '../../interfaces';
import { CLIENT_ACTIONS } from '../action-types';
import { RootState } from '../store';

export const getCreateClientForms = () =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
    api: ApiTypes
  ) => {
    const getCreateClientForms = async () => {
      const res = await api.client.getCreateClientForms();
      return res.data.data;
    }

    return dispatch({
      type: CLIENT_ACTIONS.GET_CREATE_CLIENT_FORMS,
      payload: getCreateClientForms(),
    });
  };

export const createNewClient = (forms) =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
    api: ApiTypes
  ) => {
    const createClient = async () => {
      const res = await api.client.createNewClient(forms);
      return res.data.data;
    }

    return dispatch({
      type: CLIENT_ACTIONS.CREATE_CLIENT,
      payload: createClient(),
    });
  };