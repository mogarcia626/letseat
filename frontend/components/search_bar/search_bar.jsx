import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

const mSTP = state => {
    return {
        location: 'default'
    }
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    } 
    // <img src={window.logo} alt="Letseat logo" className='logo' />

    render() {
        return (
            <div className='search-bar' id="default">
                <h1 className='search-bar' id="default">
                    Find your table for any occasion
                </h1>
                <SearchFormContainer />
            </div>
        )
    }
}

export default connect(mSTP)(SearchBar);
