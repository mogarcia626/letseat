import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        // DEV-TO-PRO
        // applyMiddleware(thunk)
        applyMiddleware(thunk, logger)
    )
    const persistor = persistStore(store)

    return { store, persistor }
}

export default configureStore;