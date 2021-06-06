import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import Modal from './session/modal';
import SearchBar from './search_bar/search_bar';


const App = () => (
    <div>
        <Modal />

        <header>
            <NavBar />
        </header>

        <main>
            <SearchBar />
            <p>Restaurant Index Containers</p>
        </main>

        <footer className='footer-test' >
            Footer
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>scroll test</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
        </footer>
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
    </div>
);

export default App;

{/* <AuthRoute exact path="/signup" component={SignupFormContainer} />
<AuthRoute exact path="/login" component={LoginFormContainer} /> */}