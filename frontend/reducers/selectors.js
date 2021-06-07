export const selectAllRestaurants = (state) => {
    return Object.values(state.entities.restaurants)
}