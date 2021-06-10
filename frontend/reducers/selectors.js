export const selectAllRestaurants = (state) => {
    return Object.values(state.entities.restaurants)
}

// export const selectAllLocations = (state) => {
//     return Object.values(state.entities.restaurants.locations.unique)
//}

export const selectReviewsForRestaurant = (entities) => {
    return entities.reviews
}

export const selectSingleRestaurant = ({ restaurants }, restaurantId) => {
    return Object.assign({}, restaurants[restaurantId])
}
