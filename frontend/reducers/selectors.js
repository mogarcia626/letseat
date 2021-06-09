export const selectAllRestaurants = (state) => {
    return Object.values(state.entities.restaurants)
}

export const selectAllLocations = (state) => {
    return Object.values(state.entities.restaurants.locations.unique)
}

export const selectReviewsForRestaurant = (state) => {
    return Object.values(state.entities.reviews)
}


export const selectRestaurant = ({ restaurants }, restaurantId) => {
    return restaurants[restaurantId]
}
