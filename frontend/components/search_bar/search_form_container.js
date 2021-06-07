import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
// import { receiveAllLocations, receiveCurrentLocation } from '../../actions/location_actions';
import SearchForm from './search_form';

const mapStateToProps = () => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // receiveAllLocations: () => dispatch(receiveAllLocations()),
        // receiveCurrentLocation: () => dispatch(receiveCurrentLocation(location)),
        closeModal: () => dispatch(closeModal()),        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

