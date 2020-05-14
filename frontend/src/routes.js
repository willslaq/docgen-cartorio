import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/home/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Switch>
            </Switch>
        </BrowserRouter>
    )
}