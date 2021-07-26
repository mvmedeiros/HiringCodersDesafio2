import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Clients from './clients';
import Products from './products';
import Home from './home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/clients' exact component={Clients} />
            <Route path='/products' exact component={Products} />
            </Switch>
        </BrowserRouter>
    )
}