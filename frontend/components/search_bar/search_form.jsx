import React from 'react';
import { resTimes, resParty } from '../../util/general_utils';
import { Calendar } from 'react-date-range';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { FaChevronDown, FaRegUser } from 'react-icons/fa';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        const today = (new Date()).toString().split(' ');
        this.state = {
            showCalendar: false,
            showTimes: false,
            showParty: false,
            date: {
                day: today[1] + ' ' + today[2],
                year: today[3],
                GMT: today[5],
            },
            time: '7:00pm',
            party_size: '2 People',
            search: '',          
        };        
        this.openCalendar = this.openCalendar.bind(this);
        this.openTimeDropdown = this.openTimeDropdown.bind(this);
        this.openPartyDropdown = this.openPartyDropdown.bind(this);
        this.closeDropdowns = this.closeDropdowns.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openCalendar() { this.setState({ showCalendar: true }) }
    openTimeDropdown() { this.setState({ showTimes: true }) }    
    openPartyDropdown() { this.setState({ showParty: true }) }   
    closeDropdowns() {
        this.setState({ showCalendar: false });
        this.setState({ showTimes: false });
        this.setState({ showParty: false });
    }
    
    getDate(date) {
        const newDate = date.toString().split(' ');
        const newDay = newDate[1] + ' ' + newDate[2];
        const newYear = newDate[3];
        const newGMT = newDate[5];
        return {day: newDay, year: newYear, GMT: newGMT}
    }

    update(type) {
        return (e) => {
            if (type==='date') {
                this.setState({ date: this.getDate(e)});
            } else {
                this.setState({ [type]: e.target.value });
            }
            this.closeDropdowns();
        };
    }

    componentDidUpdate() {
        const { showCalendar, showTimes, showParty } = this.state;
        setTimeout(() => {
            if (showParty || showTimes || showCalendar) {
                window.addEventListener("click", this.closeDropdowns);
            } else {
                window.removeEventListener("click", this.closeDropdowns);
            }
        }, 0);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { date, time, party_size, search } = this.state

        const pro = 'https://let-s-eat.herokuapp.com/#/restaurants';
        const dev = 'http://localhost:3000/#/restaurants';
        // DEV-TO-PRO!
        this.props.updateSearchFilter(search)
        this.props.closeModal();            
        window.location = dev;
        

        //Redirect to /api/restaurants with data from form passed in as props
        // const restaurant = Object.assign({}, this.state);
        // this.props.processForm(user).then(() => {
        // })
    }

    render() {
        const { date, time, party_size, search, showCalendar, showParty, showTimes } = this.state
        const today = new Date()
        let maxDate = new Date(today)
        maxDate.setDate(maxDate.getDate() + 365)   
        
        return (
            <form className="search-modal-form"
                onSubmit={this.handleSubmit}
            >
                <div className='search-content'>
                    <div className='dropdown-inputs'>

                        <div className="search-modal-dropdown-item"
                            id='left-dropdown-input'
                            onClick={this.openCalendar}
                        > 
                            <FiCalendar size={20}/>
                            <div className="search-text" >{date.day} {date.year}</div> 
                            <FaChevronDown size={16}/>
                            {showCalendar ?
                            <div className='drop-content' id='calendar'>
                                <Calendar
                                    date={today}
                                    onChange={this.update('date')}
                                    minDate={today}
                                    maxDate={maxDate}
                                />
                            </div>                  
                            : null} 
                        </div>

                        <div
                            className="search-modal-dropdown-item"
                            onClick={this.openTimeDropdown}
                        >
                            <FiClock size={20}/>
                            <div className="search-text">
                                {time}
                            </div>
                            <FaChevronDown size={16}/>
                            {showTimes ?
                            <div className='drop-content' id='time-options'>
                                {resTimes.map((time, i) => {
                                    return (
                                    <option id='drop-item'
                                        key={i}
                                        onClick={this.update('time')}
                                    >{time}</option>
                                    )
                                })}
                            </div>            
                            : null}                             
                        </div>

                        <div  id='right-dropdown-input'
                            className="search-modal-dropdown-item"
                            onClick={this.openPartyDropdown}
                        >
                            <FaRegUser size={20}/>
                            <div className="search-text">
                                {party_size}
                            </div>

                            <FaChevronDown size={16}/>
                            {showParty ?
                            <div className='drop-content' id='party-options'>
                                {resParty.map((party, i) => {
                                    return (
                                    <option id='drop-item'
                                        key={i}
                                        onClick={this.update('party_size')}
                                    >{party}</option>
                                    )
                                })}
                            </div>            
                            : null} 
                        </div>
                        
                    </div>
                    <br />
                    <input className="search-modal-search"
                        placeholder="Location, Restaurant, or Cuisine"
                        type="text"
                        value={search}
                        onChange={this.update('search')}
                    />
                    <br />
                    <button 
                        className='search-button'>
                            Let's go
                    </button>

                    
                </div>
                
            </form>
        );
    }
};

export default SearchForm
