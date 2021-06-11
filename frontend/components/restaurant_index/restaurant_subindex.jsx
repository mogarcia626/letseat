import React from 'react';
import { connect } from 'react-redux';
import {selectAllRestaurants} from '../../reducers/selectors';
import RestaurantIndexItem from './index_item/restaurant_index_item';


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
        this.refWindow = React.createRef()
        this.cuisineFilter = this.cuisineFilter.bind(this);
        this.components = this.components.bind(this);
        this.scroll = this.scroll.bind(this);
    }
    

    cuisineFilter() {
        let restaurantList = this.props.restaurants.filter(rest => (
            rest.cuisine === this.props.cuisine)
        )
        return (
            <div className='sub-index-container'>

                <p className='sub-index-title'>
                    {this.props.cuisine}
                </p>

                <hr className="solid" />

                <div className='sub-index-grid'>
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

    scroll = (scrollOffset) => {
        this.refWindow.current.scrollLeft += scrollOffset;
    };
    
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
                {/* <button onClick={() => this.scroll(200)}>Right</button> */}
                {this.components()}                
            </div>
        )
    }


}

export default connect(mSTP)(RestaurantSubIndex);

