import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import { ConnectedRouter } from "react-router-redux";

import history from "./history";
import store from "./store";
import { HashRouter, Switch } from "react-router-dom";
import TestRouter from "./containers/TestRouter";
import TestReactInternalStateContainer from "./containers/TestReactInternalStateContainer";

const NavigateBack = () => {
    return history.goBack();
};

const About = () => {
    return (
        <div>
            <button onClick={NavigateBack}>go back</button>
            this is about page
        </div>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <HashRouter basename="/app/crm">
                    <Switch>
                        <Route exact path="/" component={TestRouter} />
                        <Route
                            path="/router"
                            component={TestReactInternalStateContainer}
                        />
                        <Route path="/about" component={About} />
                    </Switch>
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
