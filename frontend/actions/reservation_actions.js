import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';

export const receiveAllReservations = reservations => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations,
});

export const requestAllReservations = (status) => dispatch => (
    APIUtil.getReservations(status).then(reservations => (
        dispatch(receiveAllReservations(reservations))
    ))
);

export const createReservation = formReservation => dispatch => (
    APIUtil.postReservation(formReservation)
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);


// export const requestSingleReservation = id => dispatch => (
//     APIUtil.fetchReservations(id).then(reservation => (
//         dispatch(receiveSingleReservation(reservation))
//     ))
// );

export const receiveErrors = errors => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
});

// export const resetErrors = () => ({
//     type: RESET_RESERVATION_ERRORS,
// });

// export const requestAllRestaurantReservations = (restaurantId) => dispatch => (
//     APIUtil.fetchReservations({restaurant: restaurantId}).then(reservations => (
//         dispatch(receiveAllReservations(reservations))
//     ))
// );