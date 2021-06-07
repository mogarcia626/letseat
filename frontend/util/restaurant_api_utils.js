// Restaurant index
export const fetchRestaurants = filters => (
    $.ajax({
        url: '/api/restaurants',
        method: 'GET',
        data: { filters },
    })
);

// Restaurant info
export const fetchRestaurant = id => (
    $.ajax({
        url: `/api/restaurants/${id}`,
        method: 'GET',
    })
);

// Create a Restaurant
// export const createRestaurant = restaurant => (
//     $.ajax({
//         url: '/api/restaurants',
//         method: 'POST',
//         data: { restaurant }
//     })
// );

// Delete a Restaurant
// export const deleteRestaurant = restaurant => (
//     $.ajax({
//         url: '/api/restaurants',
//         method: 'DELETE',
//         data: { restaurant }
//     })
// );