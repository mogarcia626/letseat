import React from 'react';
import { connect } from 'react-redux';
import {selectAllRestaurants} from '../../reducers/selectors';
import RestaurantIndexItem from './index_item/restaurant_index_item';

const mSTP = state => ({ 
    restaurants: selectAllRestaurants(state),
    
});

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
            rest.cuisine === this.props.category)
        )
        
        return (
            <div className='sub-index-container'>
                <p className='sub-index-title'>
                    {this.props.category}
                </p>

                <hr className="solid" />

                <div className='sub-index-grid' id={`scroll-to-${this.props.navId}`}>
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

    scroll = (e) => {
        let subIdx = document.getElementById(`scroll-to-${this.props.navId}`);
        subIdx.scrollLeft += parseInt(e.target.value);
    };
    
    components() {
        switch (this.props.filter) {
            case 'cuisine':
                return this.cuisineFilter()              
                break;
            // case 'rating':
            //     return this.ratingsFilter()              
            //     break;        
            default:
                break;
        }
    }

    render() {

        return(
            <div className='sub-index-container'>
                <button className='scroll-left' value={-1000} onClick={this.scroll}>
                    ❮
                </button>
                <button className='scroll-right' value={1000} onClick={this.scroll}>
                    ❯
                </button>
                {this.components()}                
            </div>
        )
    }
}

export default connect(mSTP)(RestaurantSubIndex);

// ratingsFilter() {
//         let restaurantList = this.props.restaurants.filter(rest => (
//             rest.cuisine === this.props.category)
//         )
//         return (
//             <div className='sub-index-container'>

//                 <p className='sub-index-title'>
//                     {this.props.category}
//                 </p>

//                 <hr className="solid" />

//                 <div className='sub-index-grid'>
//                 {restaurantList.map((restaurant, i) => {
//                     return (
//                         <RestaurantIndexItem
//                         key={i}
//                         restaurant={ restaurant }
//                         />
//                     )
//                 })}
//                 </div>
//             </div>
//         )
//     }