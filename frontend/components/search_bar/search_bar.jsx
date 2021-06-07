import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

const mSTP = state => {
    return {
        location: this.state.ui.filter.location
    }
};

const mDTP = dispatch => {
    return {
        
    };
};
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        
        
        this.selectBackground = this.selectBackground.bind(this);
    } 

    selectBackground() {
        switch (this.props.location) {
            case 'Orlando, FL':
                return 'orlando'
                break;
            case 'New York, NY':
                return 'new-york'
                break;
            case 'San Francisco, CA':
                return 'san-francisco'
                break;
            case 'Austin, TX':
                return 'austin'
                break;
            case 'search-modal':
                return 'search-form-modal'
                break;         
            default:
                return 'default';
        };
    };    
    
    render() {
        return (
            <div className='search-bar' id={this.selectBackground()}  >
                <h1>
                    Find your table for any occasion
                </h1>
                <SearchFormContainer />
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(SearchBar);
