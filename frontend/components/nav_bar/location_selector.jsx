import React from 'react';
import { MdSearch } from "react-icons/md";

class LocationSelector extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        //Logo will link to home page
        //location selector must be dropdown of all cities
        return (
            <div>
                <button className="search-button" type="submit">
                    <MdSearch size={24} />
                </button>
            </div>
        )
    }
}

export default LocationSelector;