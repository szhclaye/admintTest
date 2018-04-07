import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from "./route.config.js";

const routeConfig = () => (
    <Switch>
        {routes.map((route,index) => (
            < Route 
                key={index}
                path={route.path}
                component = {route.component}
                exact = {route.exact}
                />
        ))}
    </Switch>
);

export default routeConfig;
