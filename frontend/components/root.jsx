import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore, persistor } from '../store/store'

import App from './app';

const Root = () => (
    <Provider store={configureStore}>
        <HashRouter>  
            <PersistGate persistor={persistor} >
                <App />
            </PersistGate>
        </HashRouter>
    </Provider>
);

export default Root;
