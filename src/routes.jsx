import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Auth from './components/auth';


const Routes = (props) => (
    <Router {...props}>
        <div>
            <Route path="/" component={Auth} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
        </div>
    </Router>
);

export default Routes;