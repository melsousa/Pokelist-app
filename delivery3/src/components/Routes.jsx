import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom';

import About from './pokemon/About'
import Pokemon from './pokemon/Pokemon';

import Details from './extra/Details';

const Routes = props => (
    // HashRouter ? BrowserRouter
    <HashRouter>
        <Redirect from='*' to='/pokemon' />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/about' component={About} />
        <Route exact path='/Details' component={Details}/>
    </HashRouter>
)

export default Routes