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
        {/* <Switch> */}
            <p>Body Will Go Here</p>
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        {/* </Switch> */}
        <p>Footer Will Go Here</p>
    </div>
);

export default App;

{/* <AuthRoute exact path="/signup" component={SignupFormContainer} />
<AuthRoute exact path="/login" component={LoginFormContainer} /> */}