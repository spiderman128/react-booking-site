  import { UI_ACTIONS } from '../action-types';

export interface UiState {
  layouts: { xl: any[]; lg: any[]; md: any[]; sm: any[] };
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isDrawerOpened: boolean;
}

const initialState: UiState = {
  layouts: { xl: [], lg: [], md: [], sm: [] },
  breakpoint: 'xl',
  isDrawerOpened: false,
};

const uiReducer = (state: UiState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case UI_ACTIONS.SET_DASHBOARD_LAYOUT:
      return {
        ...state,
        layouts: payload,
      };

    case UI_ACTIONS.SET_BREAK_POINT:
      return {
        ...state,
        breakpoint: payload,
      };

    case UI_ACTIONS.SET_IS_DRAWER_OPENED:
      return {
        ...state,
        isDrawerOpened: payload,
      };

    default:
      return state;
  }
};

export default uiReducer;
