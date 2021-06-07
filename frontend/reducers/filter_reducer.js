import { UPDATE_FILTERS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
    // bounds: {},
    // minSeating: 1,
    // maxSeating: 10
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_FILTERS) {
        const newFilters = {
            [action.filters]: action.value
        };
        return Object.assign({}, state, newFilters);
    } else {
        return state;
    }
};

export default filtersReducer;