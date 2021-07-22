import React from 'react';
import { resTimes, resParty2, monthArray } from '../../../util/general_utils';
import { Calendar } from 'react-date-range';
import { FaChevronDown } from 'react-icons/fa';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        const today = new Date()
        // const today = (new Date());
        this.state = {
            showCalendar: false,
            showTimes: false,
            showParty: false,
            date: {
                day: today.getDate(),
                month: today.getMonth(),
                year: today.getFullYear(),
                // GMT: ,
            },
            time: '7:00pm',
            party_size: 'For 2',
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
        const newDay = date.getDate();
        const newMonth = date.getMonth();
        const newYear = date.getFullYear();
        // const newGMT = date.toString().split(' ')[5];
        return {day: newDay, month: newMonth, year: newYear}
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
        if (this.props.user.id) {
            
            const { date, time, party_size } = this.state 
            console.log(date)       
            const reservation = {
                party_size: parseInt(party_size.slice(4)),
                user_id: this.props.user.id,
                restaurant_id: parseInt(window.location.hash.slice(14)),
                time: time,
                day: date.day,
                month: date.month,
                year: date.year,
            };
            this.props.processForm(reservation).then( (reservation) => {
                this.props.openModal({modal:'reservation-confirmation', data: reservation});
            }) 
        } else {
            this.props.openModal({modal: 'signup', data: null})
        }    
    }

    render() {
        const { date, time, party_size, showCalendar, showParty, showTimes } = this.state
        const today = new Date()
        let maxDate = new Date(today)
        maxDate.setDate(maxDate.getDate() + 365)

        return (            
            <div id='make-res'>
                <h3 className='res-form-title'>Make a Reservation</h3>

                <form action="" method="post"
                    className='res-form'
                    onSubmit={this.handleSubmit}
                >                   
                        
                    <label className='res-input-title'>Party Size</label>
                    <div className='res-input-field'
                        onClick={this.openPartyDropdown}
                    >                            
                        <p className="res-input-text">{party_size}</p>
                        <FaChevronDown size={12}/>
                        {showParty ?
                        <div className='drop-content' id='party-options'>
                            {resParty2.map((party, i) => {
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

                    <div className='flex-row'>
                        <div className='res-input-container'>
                            <label className='res-input-title'>Date</label>
                            <div className='res-input-field' onClick={this.openCalendar}>
                                <div className="res-input-text" >{monthArray[date.month]} {date.day} {date.year}</div> 
                                <FaChevronDown size={12}/>
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
                        </div>

                    <div className='res-input-container'>
                    <label className='res-input-title'>Time</label>
                    <div className='res-input-field' onClick={this.openTimeDropdown} >
                        <div className="res-input-text">
                            {time}
                        </div>
                        <FaChevronDown size={12}/>
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
                    </div>

                </div>
                <button>Find a table</button>
                </form>
            </div>
        )
    }
}

export default ReservationForm