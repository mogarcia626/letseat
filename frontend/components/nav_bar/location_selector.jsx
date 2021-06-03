import React from 'react';

class LocationSelector extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        //Logo will link to home page
        //location selector must be dropdown of all cities
        return (
            <div id="sub-nav-bar">
                <p>LetsEat Logo</p>
                <p>[location selector]</p>
            </div>
        )
    }
}

export default LocationSelector;