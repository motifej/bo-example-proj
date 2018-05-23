import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { HashRouter, Switch } from "react-router-dom";

import history from "./history";
import store from "./store";
import DefaultTable from "./bo-shared-components/src/ui/Table/default-table";
import { ControlledForm } from "./bo-shared-components/src/ui/Form";
import { TableConfig } from "./config";

const BuildTable = (
    WrappedComponent = ControlledForm,
    WrappedTable = DefaultTable
) =>
    class Subscribe extends WrappedComponent {
        render() {
            const url = this.buildURL();
            return <div>he</div>;
        }
    };

const Table = BuildTable();

const About = props => {
    console.log("props", props);
    return <div>im about</div>;
};
const All = () => {
    return (
        <div>
            <ControlledForm />
            <About />
        </div>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/* <HashRouter basename="/app/crm"> */}
                <HashRouter>
                    <div>
                        <Route exact path="/" component={All} />
                        <Route path="/results" component={Table} />
                    </div>
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
