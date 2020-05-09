import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

// import appReducer from './features/app/reducer';
// import homeReducer from './features/home/reducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history)
    // home: homeReducer,
    // app: appReducer
  });
}
