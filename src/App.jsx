import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import history from "./history";
import store from "./store";

import Form from "./components/Search";
import Results from "./components/results";

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Form} />
                        <Route exact path="/results" component={Results} />
                    </Switch>
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
