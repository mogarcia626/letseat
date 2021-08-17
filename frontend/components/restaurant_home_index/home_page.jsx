import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import SearchBarContainer from '../search_bar/search_bar_container';
import RestaurantIndex from './restaurant_index'

function HomePage() {    

    return (
        <div className='content-wrap'>
            <SearchBarContainer />
            <RestaurantIndex />
        </div>
    )
};

export default HomePage;


