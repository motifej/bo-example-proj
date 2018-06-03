import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    }
];

const Router = () =>
    routes.map((route, index) => (
        <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.component}
        />
    ));

export default Router;
