import React from 'react';
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
        this.props.updateFilter('city', e.currentTarget.value)
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
                
                {this.state.showDropDown ? (
                    <div className='drop-content'>
                        
                        <option id='drop-item'
                            value="Orlando, FL"
                            onClick={this.locationSelect}>
                                Orlando, FL
                        </option>
                        
                        <option id='drop-item'
                            value='New York, NY'
                            onClick={this.locationSelect}>
                            New York, NY
                        </option>

                        <option id='drop-item'
                            value='San Francisco, CA'
                            onClick={this.locationSelect}>
                            San Francisco, CA
                        </option>

                        <option id='drop-item'
                            value='Austin, TX'
                            onClick={this.locationSelect}>
                            Austin, TX
                        </option>
                        
                    </div>
                ) : null }
            </div>
        )
    }
}

export default LocationSelector;
