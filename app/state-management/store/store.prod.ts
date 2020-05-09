import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers';
import { counterStateType, Store } from '../reducers/types';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState?: counterStateType): Store {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
