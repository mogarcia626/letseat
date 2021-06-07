import React from 'react';
// import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import Modal from './session/modal';
import SearchBar from './search_bar/search_bar';
import RestaurantIndex from './restaurant_index/restaurant_index'


const App = () => (
    <div>
        <Modal />

        <header>
            <NavBar />
        </header>

        <main className='main-body'>
            <SearchBar />
            <RestaurantIndex />
        </main>

        <br />
        
        <footer className='footer-test' >
            Footer           
        </footer>
        <Switch>

            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;

{/* <AuthRoute exact path="/signup" component={SignupFormContainer} />
<AuthRoute exact path="/login" component={LoginFormContainer} /> */}