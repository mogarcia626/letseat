import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_SINGLE_RESERVATION = 'RECEIVE_SINGLE_RESERVATION';

// add reservation to state when booking is made
export const receiveSingleReservation = reservation => ({
    type: RECEIVE_SINGLE_RESERVATION,
    reservation,
});

export const requestSingleReservation = id => dispatch => (
    APIUtil.fetchReservation(id).then(reservation => (
        dispatch(receiveSingleReservation(reservation))
    ))
);

export const createReservation = formReservation => dispatch => (
    APIUtil.postReservation(formReservation)
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);
