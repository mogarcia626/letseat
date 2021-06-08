import { combineReducers } from 'redux';
import modalReducer from './modals_reducer';
import filtersReducer from './filters_reducer'

const uiReducer = combineReducers(
    {
        modal: modalReducer,
        filters: filtersReducer
    }
);

export default uiReducer