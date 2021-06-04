import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar'
import Modal from './session/modal'
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';


const App = () => (
    <div>
        <Modal />
        <NavBar />
        {/* <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
        <p>Body Will Go Here</p>
        <p>Footer Will Go Here</p>
    </div>
);

export default App;
