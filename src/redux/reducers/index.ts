import { combineReducers } from 'redux';
import uiReducer, { UiState } from './ui.reducer';
import authReducer, { AuthReducerState } from './auth.reducer';
import clientReducer, { ClientReducerState } from './client.reducer';

export interface RootState {
  uiReducer: UiState;
  authReducer: AuthReducerState;
  clientReducer: ClientReducerState;
}

const rootReducer = combineReducers<RootState>({
  uiReducer,
  authReducer,
  clientReducer,
});

export default rootReducer;
