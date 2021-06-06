import React from 'react';
import { TiLocation } from 'react-icons/ti';
import { BsCaretDownFill } from 'react-icons/bs';


class LocationSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLocations: false,
        };
        this.openDropDown = this.openDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
    }

    openDropDown() {
        this.setState({ showLocations: true })
    }

    closeDropDown() {
        this.setState({ showLocations: false })
    }

    componentDidUpdate() {
        const { showLocations } = this.state;
        
        setTimeout(() => {
            if (showLocations) {
                window.addEventListener("click", this.closeDropDown);
            } else {
                window.removeEventListener("click", this.closeDropDown);
            }
        }, 0);
    }
    

    render () {
        //location selector must be dropdown of all cities
        return (
            <div className='location-selector'>
                <button 
                    onClick={this.openDropDown}
                    className="location-button">
                    <TiLocation size={24} />
                    <BsCaretDownFill size={16} height="24"/>
                </button>
                
                {this.state.showLocations ? (
                    <div className='drop-content'>
                        <p id='drop-item'>Orlando, FL</p>
                        <p id='drop-item'>New York, NY</p>
                        <p id='drop-item'>San Francisco, CA</p>
                        <p id='drop-item'>Austin, Tx</p>
                    </div>
                ) : null }
            </div>
        )
    }
}

export default LocationSelector;
