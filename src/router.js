import React from 'react';
import { Route } from 'react-router-dom';
import Example from 'containers/Example';

const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: Example,
  },
];

const Router = props =>
  routes.map(route => (
    <Route
      key={route.id}
      exact={route.exact}
      path={route.path}
      render={() => <route.component {...props} />}
    />
  ));

export default Router;
