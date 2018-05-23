import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { HashRouter, Switch } from "react-router-dom";

import history from "./history";
import store from "./store";
import { BuildDefaultTable } from "./bo-shared-components/src/ui/Table";
import { TableConfig } from "./config";

const UsersTable = BuildDefaultTable(TableConfig);
const HelloWorld = () => <div>Hello World </div>;
const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <HashRouter basename="/app/crm">
                    <Switch>
                        <Route exact path="/" component={UsersTable} />
                    </Switch>
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
