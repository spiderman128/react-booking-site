import { CLIENT_ACTIONS } from '../action-types';

export interface ClientReducerState {
  createClientForms: any;
  loading: boolean;
}

const initialState: ClientReducerState = {
  createClientForms: null,
  loading: false,
};

const ClientReducer = (state: ClientReducerState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case CLIENT_ACTIONS.GET_CREATE_CLIENT_FORMS_START:
      return {
          ...state,
          loading: true,
      };

    case CLIENT_ACTIONS.GET_CREATE_CLIENT_FORMS_ERROR:
      return {
        ...state,
        createClientForms: null,
        loading: true,
      };

    case CLIENT_ACTIONS.GET_CREATE_CLIENT_FORMS_SUCCESS:
      return {
        ...state,
        createClientForms: payload,
        loading: true,
      };

    case CLIENT_ACTIONS.CREATE_CLIENT_START:
      return {
        ...state,
        loading: true,
      };

    case CLIENT_ACTIONS.CREATE_CLIENT_ERROR:
      return {
        ...state,
        loading: true,
      };

    case CLIENT_ACTIONS.CREATE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default ClientReducer;
