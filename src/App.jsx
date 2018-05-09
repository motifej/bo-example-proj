import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import { ConnectedRouter } from "react-router-redux";

import history from "./history";
import store from "./store";
import { HashRouter, Switch } from "react-router-dom";

import {
    RaisedPrimaryBtn,
    RaisedDefaultBtn,
    RaisedSecondaryBtn,
    RaisedDsiabledBtn
} from "./hoc.js";

const Comp = () => (
    <div>
        <RaisedPrimaryBtn />
        <RaisedDefaultBtn />
        <RaisedSecondaryBtn />
        <RaisedDsiabledBtn />
    </div>
);
const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/*<HashRouter basename="/app/crm">*/}
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Comp} />
                    </Switch>
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
