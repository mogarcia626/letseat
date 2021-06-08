import React from 'react';
import { connect } from 'react-redux';
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import {selectAllRestaurants} from '../../reducers/selectors';
import RestaurantSubIndex from './restaurant_subindex'


const mSTP = state => ({ 
    restaurants: selectAllRestaurants(state),
    filters: state.ui.filters,
    
});

const mDTP = dispatch => {
    return {
        requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
        
    };
};

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.requestAllRestaurants(this.props.filters)
    }
   
    

    render() {
        // create helper method for randomizing cuizines
        return(
            <div className="index-container">
                <RestaurantSubIndex filter='cuisine' cuisine='pizza' />
                <RestaurantSubIndex filter='cuisine' cuisine='latin american' />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(RestaurantIndex);



