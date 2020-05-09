import { History } from 'history';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import Routes from './routes';
import { Store } from './state-management/reducers/types';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default hot(Root);
