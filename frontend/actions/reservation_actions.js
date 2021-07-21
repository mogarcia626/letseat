import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';
export const RECEIVE_SINGLE_RESERVATION = 'RECEIVE_SINGLE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const RESET_RESERVATION_ERRORS = 'RESET_RESERVATION_ERRORS';

export const receiveAllReservations = reservations => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
})

export const receiveSingleReservation = reservation => ({
    type: RECEIVE_SINGLE_RESERVATION,
    reservation,
});

export const receiveErrors = errors => ({
    type: RECEIVE_RESERVATION_ERRORS,
    errors
});

export const resetErrors = () => ({
    type: RESET_RESERVATION_ERRORS,
});

export const requestAllUserReservations = (userId) => dispatch => (
    APIUtil.fetchReservations({user: userId}).then(reservations => (
        dispatch(receiveAllReservations(reservations))
    ))
);

export const requestAllRestaurantReservations = (restaurantId) => dispatch => (
    APIUtil.fetchReservations({restaurant: restaurantId}).then(reservations => (
        dispatch(receiveAllReservations(reservations))
    ))
);

export const requestSingleReservation = id => dispatch => (
    APIUtil.fetchReservation(id).then(reservation => (
        dispatch(receiveSingleReservation(reservation))
    ))
);

export const createReservation = formReservation => dispatch => (
    APIUtil.postReservation(formReservation)
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
