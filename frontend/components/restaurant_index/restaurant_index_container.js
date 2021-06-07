import React from 'react';
import { connect } from 'react-redux';
// import { receiveAllLocations, receiveCurrentLocation } from '../../actions/location_actions';
import LocationSelector from './location_selector';

const mapStateToProps = () => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // receiveAllLocations: () => dispatch(receiveAllLocations()),
        // receiveCurrentLocation: () => dispatch(receiveCurrentLocation(location)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector);