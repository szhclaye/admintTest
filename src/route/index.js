import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '@/views/Layout';
import Login from '@/views/Login';
import Register from '@/views/Register';

import Home from '@/views/Home';

export const childRoutes = [
    {
        path: '/home',
        component: Home,
        exactly: true
    }
];

const routes = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Layout} />
    </Switch>
);

export default routes;
