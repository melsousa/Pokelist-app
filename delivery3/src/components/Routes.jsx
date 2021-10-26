import React from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom';

import About from './pokemon/About'
import Pokemon from './pokemon/Pokemon';

const Routes = props => (
    <HashRouter>
        <Redirect from='*' to='/pokemon' />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/about' component={About} />
    </HashRouter>
)

export default Routes