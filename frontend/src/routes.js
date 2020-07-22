import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home/index';
import DocumentosPessoa from './screens/DocumentosPessoa/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pessoas/:_id' component={DocumentosPessoa} />
            </Switch>
        </BrowserRouter>
    )
}