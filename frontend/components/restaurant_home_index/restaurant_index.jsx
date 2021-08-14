import React from 'react';
import { connect } from 'react-redux';
import {requestAllRestaurants} from '../../actions/restaurant_actions';
import {selectAllRestaurants} from '../../reducers/selectors';
import { clearSearchFilter } from '../../actions/filter_actions';
import * as UTIL from '../../util/general_utils'
import RestaurantSubIndex from './restaurant_subindex'


const mSTP = state => ({ 
    restaurants: selectAllRestaurants(state),
    filters: state.ui.filters,
});

const mDTP = dispatch => ({
        requestAllRestaurants: filters => dispatch(requestAllRestaurants(filters)),
        clearSearchFilter: () => dispatch (clearSearchFilter()),
});

class RestaurantIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }        
        this.randomCuisine = this.randomCuisine.bind(this)
        // this.randomRating = this.randomRating.bind(this)
        // this.ratingFilter = this.ratingFilter.bind(this)      
    }

    componentDidMount() {
        this.props.clearSearchFilter();
        this.props.requestAllRestaurants(this.props.filters)
        .then(() => this.setState({
            loading: false,
        }))
    }

    randomCuisine(num) {
        const cuisineArr = UTIL.restaurantCuisinesList
        const cuisList = new Set()
        while (cuisList.size <= num) {
            let rand = Math.floor(Math.random() * (cuisineArr.length))
            cuisList.add(cuisineArr[rand])
        }
        return Array.from(cuisList)
    }
    
    // randomRating(num) {
    //     const ratingArr = Object.keys(UTIL.ratingsCategoryList)
    //     const ratingList = new Set(['average'])
    //     while (ratingList.size <= num) {
    //         let rand = Math.floor(Math.random() * (ratingArr.length))
    //         ratingList.add(ratingineArr[rand])
    //     }
    //     return Array.from(ratingList)
    // } 
        
    render() {
        const {loading} = this.state
        if (loading) {
            return <div className="loader"></div>
        } else {            
            const num = 4
            const arr = []
            for (let i = 0; i < num; i++) {
                arr.push(i)
            }
            const cuisList  = this.randomCuisine(num)
            // const ratingList = this.randomRating(num)
        
            return (
                <div className="index-container">
                    {arr.map( num => 
                        <RestaurantSubIndex key={num} filter='cuisine'
                            category={cuisList[num]}
                            navId={num}
                        />
                    )}
                </div>
            )
        }
    }
}

export default connect(mSTP, mDTP)(RestaurantIndex);


// return (
//     <div className="index-container">
//         {arr.map(num => {
//             if (num%2 === 1) {
//                 return <RestaurantSubIndex filter='rating' category={ratingList[Math.floor(num/2)]} />
//             } else {
//                 return <RestaurantSubIndex filter='cuisine'
//                     restaurants={this.cuisineFilter(cuisList[num])}
//                 />
//             }
//         })}
//     </div>
// )



