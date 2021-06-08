import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

const mSTP = state => {
    return {
        location: state.ui.filters.city
    }
};

const mDTP = dispatch => {
    return {
        
    };
};
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        
        this.selectBackground = this.selectBackground.bind(this)
        this.selectComponentId = this.selectComponentId.bind(this);
    } 

    selectBackground() {
        switch (this.props.location) {         
            case 'Orlando, FL':
                return 'search-bar-orlando'
            case 'New York, NY':
                return 'search-bar-new-york'
            case 'San Francisco, CA':
                return 'search-bar-san-francisco'
            case 'Austin, TX':
                return 'search-bar-austin'
            default:
                return 'search-bar-default';
        };
    };  
    
    selectComponentId() {
        let compId = this.props.id ? this.props.id : null
        return compId
    }
    
    render() {
        return (
            <div className={this.selectBackground()} id={this.selectComponentId()}>
                <h1>
                    Find your table for any occasion
                </h1>
                <SearchFormContainer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SearchBar);
