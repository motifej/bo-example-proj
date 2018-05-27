import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { reducer as reduxFormReducer } from "redux-form";
import reducers from "./reducers";
import history from "./history";

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        form: reduxFormReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

export default store;
