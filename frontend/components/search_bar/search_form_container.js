import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import SearchForm from './search_form';

const mSTP = () => {
    return {
        
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),        
    };
};

export default connect(mSTP, mDTP)(SearchForm);

