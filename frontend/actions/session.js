import { postUser, postSession, deleteSession } from '../utils/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const signIn = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const signout = () => dispatch => deleteSession()
    .then(() => dispatch(signoutCurrentUser()));