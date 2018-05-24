import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { HashRouter, Switch } from "react-router-dom";

import history from "./history";
import store from "./store";

// import ResultsTable from "./components/results"
// import SearchForm from "./components/Search"

import DefaultTable from "./bo-shared-components/src/ui/Table/default-table";
import FormTemplate from "./bo-shared-components/src/ui/Form";
import { config } from "./bo-shared-components/src/ui/Form/config";
import { TableConfig } from "./config";

const Results = props => {
    console.log("results", props);
    return <div>hello</div>;
};
const ShowResults = values => console.log("values", values);
const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {/* <HashRouter basename="/app/crm"> */}
                <HashRouter>
                    <div>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <FormTemplate
                                    config={config}
                                    onSubmit={ShowResults}
                                />
                            )}
                        />
                        <Route
                            path="/about"
                            render={() => <Results form="SearchForm" />}
                        />
                    </div>
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
