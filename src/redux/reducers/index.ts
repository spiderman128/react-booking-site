import { combineReducers } from 'redux';
import uiReducer, { UiState } from './ui.reducer';

export interface RootState {
  uiReducer: UiState;
}

const rootReducer = combineReducers<RootState>({
  uiReducer,
});

export default rootReducer;
