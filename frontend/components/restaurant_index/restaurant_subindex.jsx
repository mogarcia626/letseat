import React from 'react';
import { connect } from 'react-redux';
import {selectAllRestaurants} from '../../reducers/selectors';
import RestaurantIndexItem from './restaurant_index_item';


const mSTP = state => ({ 
    restaurants: selectAllRestaurants(state),
    
});

// const mDTP = dispatch => {
//     return {
//         // requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
        
//     };
// };

class RestaurantSubIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.cuisineFilter = this.cuisineFilter.bind(this);
        this.components = this.components.bind(this);
    }
    

    cuisineFilter() {
        debugger
        let restaurantList = this.props.restaurants.filter(rest => (
            rest.cuisine === this.props.cuisine)
        )
        return (
            <div>
                <h3>{this.props.cuisine}</h3>

                <div className='sub-index-container'>
                {restaurantList.map((restaurant, i) => {
                    return (
                        <RestaurantIndexItem
                        key={i}
                        restaurant={ restaurant }
                        />
                    )
                })}
                </div>
            </div>
        )
    }
    
    components() {
        switch (this.props.filter) {
            case 'cuisine':
                return this.cuisineFilter()              
                break;        
            default:
                break;
        }
    }

    render() {

        return(
            <div>
                {this.components()}                
            </div>
        )
    }


}

export default connect(mSTP)(RestaurantSubIndex);



