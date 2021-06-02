import * as APUIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = () => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = formUser => dispatch => APUIUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => APUIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => APUIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));