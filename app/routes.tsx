import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './client/containers/App';
import CounterPage from './client/containers/CounterPage';
import HomePage from './client/containers/HomePage';
import routes from './constants/routes.json';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
