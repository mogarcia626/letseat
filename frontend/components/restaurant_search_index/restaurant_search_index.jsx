import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { requestAllRestaurants } from '../../actions/restaurant_actions';
import RestaurantSearchIndexItem from './restaurant_search_index_item';
import SearchBarContainer from '../search_bar/search_bar_container'

function RestaurantSearchIndex() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const filters = useSelector(state => state.ui.filters)
    const restaurants = useSelector(state => state.entities.restaurants)

    useEffect( ()=> {
        dispatch(requestAllRestaurants(filters))
        .then( setLoading(false) )
    }, [])

    let { city, search } = filters;
    if (search !== '') search = `You seached for "${search}" in ${city}`;
    if (city !== '') city = ` in ${city}`
    
    if (loading) {
        return <div className="loader"></div>
    } else {
        const restArr = Object.values(restaurants)
        return (
            <div className='content-wrap'>
                <SearchBarContainer id='search-form-general' hideWelcome={true}/>
                <div className='search-result-page-container'>
                    <p id='you-searched-for'>{search}</p>
                    <p id='number-restaruants-available'>{restArr.length} restaurants available{city}</p>
                    {restArr.map( restaurant => (
                        <RestaurantSearchIndexItem
                            key={restaurant.id}
                            restaurant={restaurant}
                            time={filters.time}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default RestaurantSearchIndex;