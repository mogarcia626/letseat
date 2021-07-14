import { UPDATE_LOCATION_FILTER } from '../actions/filter_actions';
import { UPDATE_CUISINE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    city: '',
    cuisine: '',
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case UPDATE_LOCATION_FILTER:
            return Object.assign({}, state, {city: action.city})   
        case UPDATE_CUISINE_FILTER:
            return Object.assign({}, state, {cuisine: action.cuisine})         
        default:
            return state;
    }
};

export default filtersReducer;
