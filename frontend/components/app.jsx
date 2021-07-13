import React from 'react';
// import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import Modal from './general_use/modal';
import HomePage from './home_page';
import RestaurantShowContainer from './restaurant_show/restaurant_show_container';


const App = () => (
    <div className='container'>
        <Modal />
        <NavBar />       
        
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
            <Redirect to='/' />
        </Switch>

        <br />
        
        <footer className='footer-test' >
            Footer           
        </footer>
    </div>
);

export default App;

{/* <AuthRoute exact path="/signup" component={SignupFormContainer} />
<AuthRoute exact path="/login" component={LoginFormContainer} /> */}