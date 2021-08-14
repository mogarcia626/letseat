import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer';
import { persistStore } from 'redux-persist'


const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        // DEV-TO-PRO
        // applyMiddleware(thunk))
        applyMiddleware(thunk, logger))
 )

 const persistor = persistStore(configureStore)

export default { configureStore, persistor }