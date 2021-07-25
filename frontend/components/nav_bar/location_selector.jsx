import React from 'react';
import { cityList, devUrl, proUrl } from '../../util/general_utils';
import { TiLocation } from 'react-icons/ti';
import { BsCaretDownFill } from 'react-icons/bs';


class LocationSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropDown: false,
        };
        this.openDropDown = this.openDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.locationSelect = this.locationSelect.bind(this);
    }

    openDropDown() {
        this.setState({ showDropDown: true })
    }
    closeDropDown() {
        this.setState({ showDropDown: false })
    }

    componentDidUpdate() {        
        const { showDropDown } = this.state;
        
        setTimeout(() => {
            if (showDropDown) {
                window.addEventListener("click", this.closeDropDown);
            } else {
                window.removeEventListener("click", this.closeDropDown);
            }
        }, 0);
    }

    locationSelect(e) {
        e.preventDefault()
        // DEV-TO-PRO!
        this.props.updateLocationFilter(e.currentTarget.value)
        if (window.location.href !== proUrl) window.location = proUrl
    }   

    render () {
        return (
            <div className='location-selector'>

                <button 
                    onClick={this.openDropDown}
                    className="location-button">
                    <TiLocation size={24} />
                    <BsCaretDownFill size={16} height="24"/>
                </button>
                
                {this.state.showDropDown ? (
                    <div className='drop-content'>

                        {cityList.map((city, i) => {
                            return (
                                <option id='drop-item'
                                    key={i}
                                    value={city}
                                    onClick={this.locationSelect}
                                >{city}
                                </option>
                            )
                         })}

                    </div>
                ) : null }

            </div>
        )
    }
}

export default LocationSelector;