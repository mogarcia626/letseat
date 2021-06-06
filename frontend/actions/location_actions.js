export const RECEIVE_ALL_LOCATIONS = 'RECEIVE_ALL_LOCATIONS';
export const RECEIVE_CURRENT_LOCATION = 'RECEIVE_CURRENT_LOCATION';

export const receiveAllLocations = () => ({
    type: RECEIVE_ALL_LOCATIONS,
    locations,
})

export const receiveCurrentLocation = (location) => ({
    type: RECEIVE_CURRENT_LOCATION,
    location,
});
