import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createMemoryHistory';
import { Switch, HashRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import configurateStore from './store';
import Router from './router';

export const history = createHistory();
export const store = configurateStore(history);

const App = props => (
  <Provider store={store} >
    <ConnectedRouter history={history} >
      <HashRouter>
        <Switch>{Router(props)}</Switch>
      </HashRouter>
    </ConnectedRouter>
  </Provider>
);

export default App;
