import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as History from 'history';
import rootReducer from './reducers';
import * as api from '../services/api';
import { createPromise } from 'redux-promise-middleware';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
export const history = History.createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const PromiseStatus = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};
const reduxPromise = createPromise({
  promiseTypeSuffixes: [
    PromiseStatus.START,
    PromiseStatus.SUCCESS,
    PromiseStatus.ERROR,
  ],
});
const persistConfig = {
  key: 'root',
  storage
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export type RootState = ReturnType<typeof rootReducer>;
const middleware = composeEnhancers(applyMiddleware(thunk.withExtraArgument(api), reduxPromise));
const persistingReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistingReducer, middleware);
export const persistor = persistStore(store);
export default store;
