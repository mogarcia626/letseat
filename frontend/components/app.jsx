import React from 'react';
// import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './general_use/modal';
import NavBar from './nav_bar/nav_bar';
import Footer from './general_use/footer';
import HomePage from './restaurant_home_index/home_page';
import RestaurantShowContainer from './restaurant_show/restaurant_show_container';
import RestaurantSearchIndex from './restaurant_search_index/restaurant_search_index';
import UserProfilePage from './user_profile/user_profile_page';


const App = () => (
    <div className='container' id='main-app'>
        <Modal />
        <NavBar />       
        
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
            <Route path="/user/profile" component={UserProfilePage} />
            <Route exact path="/restaurants/" component={RestaurantSearchIndex} />
            <Redirect to='/' />
        </Switch>

        <Footer />
    </div>
);

export default App;

{/* <AuthRoute exact path="/signup" component={SignupFormContainer} />
<AuthRoute exact path="/login" component={LoginFormContainer} /> */}