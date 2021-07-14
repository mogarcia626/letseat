import React from 'react';
import { connect } from 'react-redux';
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import {selectAllRestaurants} from '../../reducers/selectors';
import * as UTIL from '../../util/general_utils'
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
        
        this.randomCuisine = this.randomCuisine.bind(this)        
    }

    componentDidMount() {
        this.props.requestAllRestaurants(this.props.filters)
    }

    randomCuisine(num) {
        let cuisineArr = [...UTIL.restaurantCuisinesList]
        let cuisList = []
        while (cuisList.length <= num) {
            let rand = Math.floor(Math.random() * (cuisineArr.length - 1))
            cuisList.push(cuisineArr[rand])
            cuisineArr = cuisineArr.slice(0, rand).concat(cuisineArr.slice(rand+1))
        }
        return cuisList        
    }

    randomRating(num) {
        const ratingArr = [...UTIL.ratingsCategoryList]
        ratingList = []
        while (ratingList.length <= num) {
            let rand = Math.floor(Math.random() * (ratingineArr.length - 1))
            ratingList.push(ratingineArr[rand])
            ratingineArr.splice(rand, rand)
        }
        return ratingList
    }  
        
    render() {

        const cuisList  = this.randomCuisine(4)
        
        return(
            <div className="index-container">
                <RestaurantSubIndex filter='cuisine' cuisine={cuisList[1]} />
                <RestaurantSubIndex filter='cuisine' cuisine={cuisList[0]} />
                <RestaurantSubIndex filter='cuisine' cuisine={cuisList[3]} />
                <RestaurantSubIndex filter='cuisine' cuisine={cuisList[2]} />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(RestaurantIndex);


