export enum UI_ACTIONS {
  SET_DASHBOARD_LAYOUT = 'SET_DASHBOARD_LAYOUT',
  SET_BREAK_POINT = 'SET_BREAK_POINT',
  SET_IS_DRAWER_OPENED = 'SET_IS_DRAWER_OPENED',
}

export enum AUTH_ACTIONS {
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_START = "LOGIN_START",
  LOGIN_ERROR = "LOGIN_ERROR",
  
  LOGOUT = "LOGOUT",

  REGISTER = "REGISTER",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_START = "REGISTER_START",
  REGISTER_ERROR = "REGISTER_ERROR",

  GET_ACCOUNT = "GET_ACCOUNT",
  GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS",
  GET_ACCOUNT_START = "GET_ACCOUNT_START",
  GET_ACCOUNT_ERROR = "GET_ACCOUNT_ERROR",

  GET_REGISTER_FORMS = "GET_REGISTER_FORMS",
  GET_REGISTER_FORMS_SUCCESS = "GET_REGISTER_FORMS_SUCCESS",
  GET_REGISTER_FORMS_START = "GET_REGISTER_FORMS_START",
  GET_REGISTER_FORMS_ERROR = "GET_REGISTER_FORMS_ERROR",
}

export enum CLIENT_ACTIONS {
  GET_CREATE_CLIENT_FORMS = 'GET_CREATE_CLIENT_FORMS',
  GET_CREATE_CLIENT_FORMS_SUCCESS = 'GET_CREATE_CLIENT_FORMS_SUCCESS',
  GET_CREATE_CLIENT_FORMS_START  = 'GET_CREATE_CLIENT_FORMS_START  ',
  GET_CREATE_CLIENT_FORMS_ERROR  = 'GET_CREATE_CLIENT_FORMS_ERROR  ',

  CREATE_CLIENT = 'CREATE_CLIENT',
  CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS',
  CREATE_CLIENT_START = 'CREATE_CLIENT_START',
  CREATE_CLIENT_ERROR = 'CREATE_CLIENT_ERROR'
}