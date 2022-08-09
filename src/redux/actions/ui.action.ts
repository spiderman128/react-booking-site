import { ThunkDispatch } from 'redux-thunk';
import { UI_ACTIONS } from '../action-types';

export const setBreakPoint =
  (param: any) => (dispatch: ThunkDispatch<any, any, any>) => {
    return dispatch({
      type: UI_ACTIONS.SET_BREAK_POINT,
      payload: param,
    });
  };

export const setIsDrawerOpened =
  (param: any) => (dispatch: ThunkDispatch<any, any, any>) => {
    return dispatch({
      type: UI_ACTIONS.SET_IS_DRAWER_OPENED,
      payload: param,
    });
  };