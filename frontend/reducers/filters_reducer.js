import { UPDATE_LOCATION_FILTER } from '../actions/filter_actions';
import { UPDATE_SEARCH_FILTER } from '../actions/filter_actions';
import { UPDATE_TIME_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    city: '',
    search: '',
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case UPDATE_LOCATION_FILTER:
            return Object.assign({}, state, {city: action.city})   
        case UPDATE_SEARCH_FILTER:
            return Object.assign({}, state, {search: action.search}) 
        case UPDATE_TIME_FILTER:
            return Object.assign({}, state, {time: action.time})
        default:
            return state;
    }
};

export default filtersReducer;
