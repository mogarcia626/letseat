import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { signup, login, logout } from '../../actions/session_actions';

let currId = state.session.id;

const mSTP = state => { 
    let currId = state.session.id;
    
    return {
    currentUserId: currId,
    currentUser: state.entitites.users[currId]
    }
};

const mDTP = dispatch => ({
    // signup: () => dispatch(signup()),
    // login: () => dispatch(login()),
    logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(NavBar);
