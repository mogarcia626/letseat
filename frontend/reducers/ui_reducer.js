import { combineReducers } from 'redux';
import modalReducer from './modals_reducer';

const uiReducer = combineReducers(
    {
        modal: modalReducer
    }
);

export default uiReducer