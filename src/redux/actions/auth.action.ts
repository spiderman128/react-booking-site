import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';

import { ApiTypes } from '../../interfaces';
import { AUTH_ACTIONS } from '../action-types';
import { RootState } from '../store';
import { ICredential } from '../../interfaces/user.interface';

export const login = (params: ICredential) =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
    api: ApiTypes
  ) => {
    const login = async () => {
      const res = await api.auth.login(params);
      if (res.data.success) {
        dispatch(getAccount());
      }
      return res.data;
    }

    return dispatch({
      type: AUTH_ACTIONS.LOGIN,
      payload: login(),
    });
  };

export const logout = () => async (dispatch: Dispatch) => {
  dispatch({
    type: AUTH_ACTIONS.LOGOUT,
  });
};

export const getAccount = () =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
    api: ApiTypes
  ) => {
    const getSelf = async () => {
      const res = await api.auth.self();

      if (res.data.success) {
        return res.data.data;
      } else {
        return Promise.reject(res.data);
      }
    }

    return dispatch({
      type: AUTH_ACTIONS.GET_ACCOUNT,
      payload: getSelf(),
    });
  };

export const getRegisterForms = () =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
    api: ApiTypes
  ) => {
    const getRegisterForms = async () => {
      const res = await api.auth.getRegisterForms();
      return res.data.data;
    }

    return dispatch({
      type: AUTH_ACTIONS.GET_REGISTER_FORMS,
      payload: getRegisterForms(),
    });
  };

export const register = (formData: any) =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
    api: ApiTypes
  ) => {
    const toRegister = async () => {
      const res = await api.auth.register(formData);
      return res.data;
    }

    return dispatch({
      type: AUTH_ACTIONS.REGISTER,
      payload: toRegister(),
    });
  };

