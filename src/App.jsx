import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import history from "./history";
import store from "./store";
import Router from "./router.js";

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter>
                <Switch>{Router()}</Switch>
            </HashRouter>
        </ConnectedRouter>
    </Provider>
);

export default App;
