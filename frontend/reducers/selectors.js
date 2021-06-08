export const selectAllRestaurants = (state) => {
    return Object.values(state.entities.restaurants)
}

export const selectAllLocations = (state) => {
    return Object.values(state.entities.restaurants)
}