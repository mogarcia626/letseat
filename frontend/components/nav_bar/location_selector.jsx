import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { BsCaretDownFill } from 'react-icons/bs';


class LocationSelector extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        //Logo will link to home page
        //location selector must be dropdown of all cities
        return (
            <div>
                <button className="location-button" type="submit">
                    <TiLocation size={24} />
                    <BsCaretDownFill size={16} height="24"/>
                </button>
            </div>
        )
    }
}

export default LocationSelector;