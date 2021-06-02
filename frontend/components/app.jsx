import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <h1>Welcome to LetSeat</h1>
    </div>
);

export default App;
