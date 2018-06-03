import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import history from "./history";
import store from "./store";

const About = () => {
    return <div>abut</div>;
};
const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={About} />
                </Switch>
            </HashRouter>
        </ConnectedRouter>
    </Provider>
);

export default App;
