import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';
export const RECEIVE_SINGLE_RESERVATION = 'RECEIVE_SINGLE_RESERVATION';

export const receiveAllReservations = reservations => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
})

export const receiveSingleReservation = (reservation) => ({
    type: RECEIVE_SINGLE_RESERVATION,
    reservation
});

export const requestAllReservations = filters => dispatch => (
    APIUtil.fetchReservations(filters).then(reservations => (
        dispatch(receiveAllReservations(reservations))
    ))
);

export const requestSingleReservation = id => dispatch => (
    APIUtil.fetchReservation(id).then(reservation => (
        dispatch(receiveSingleReservation(reservation))
    ))
);