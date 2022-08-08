import { AUTH_ACTIONS } from '../action-types';
import { IUserData } from '../../interfaces/user.interface';

export interface AuthReducerState {
  authorized: boolean;
  loading: boolean;
  account: IUserData | null;
  registerForms: any;
}

const initialState: AuthReducerState = {
  authorized: false,
  loading: false,
  account: null,
  registerForms: null
};

const authReducer = (state: AuthReducerState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTIONS.LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case AUTH_ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        authorized: false,
      };

    case AUTH_ACTIONS.GET_ACCOUNT_START:
      return {
        ...state,
        loading: true,
      };

    case AUTH_ACTIONS.GET_ACCOUNT_ERROR:
      return {
        ...state,
        loading: false,
        authorized: false,
        account: null,
      };

    case AUTH_ACTIONS.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        registerForms: payload,
      };

    case AUTH_ACTIONS.GET_REGISTER_FORMS_START:
      return {
        ...state,
        loading: false,
        registerForms: payload,
      };

    case AUTH_ACTIONS.GET_REGISTER_FORMS_ERROR:
      return {
        ...state,
        loading: false,
        registerForms: null,
      };

    case AUTH_ACTIONS.GET_REGISTER_FORMS_SUCCESS:
      return {
        ...state,
        loading: false,
        registerForms: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
