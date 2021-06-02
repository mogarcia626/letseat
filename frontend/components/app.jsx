import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import NavBar from './nav_bar/nav_bar'


const App = () => (
    <div>
        <NavBar />
        <h1>Let S eat App</h1>
    </div>
);

export default App;
