import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import SearchForm from './search_form';

const mapStateToProps = () => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

