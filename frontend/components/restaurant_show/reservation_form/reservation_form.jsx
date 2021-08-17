import React from 'react';
import RestaurantSchedule from './restaurant_schedule';
import { resTimes, resParty2, monthArray, isTimeAvailable, convertDay } from '../../../util/general_utils';
import { Calendar } from 'react-date-range';
import { FaChevronDown, FaExclamationCircle } from 'react-icons/fa';

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
            showResTimes: false,
        };        
        this.openCalendar = this.openCalendar.bind(this);
        this.openTimeDropdown = this.openTimeDropdown.bind(this);
        this.openPartyDropdown = this.openPartyDropdown.bind(this);
        this.closeDropdowns = this.closeDropdowns.bind(this);
        this.handleFindTable = this.handleFindTable.bind(this);
        this.timeComponents = this.timeComponents.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTimeButtonClick = this.handleTimeButtonClick.bind(this);
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
                console.log(e.target.value)
                this.setState({ [type]: e.target.value });
            }
            this.closeDropdowns();
            this.setState({ showResTimes: false })
        };
    }

    handleTimeButtonClick(e) {
        this.setState({ time: e.target.value, showResTimes: false },
            ()=> this.handleSubmit()
        )
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

    handleFindTable(e) { 
        e.preventDefault()
        this.setState({ showResTimes: true })
    }

    timeComponents() {
        const sched = this.props.schedule
        const {time, date} = this.state
        let times = []
        const day = convertDay(date.year, date.month, date.day)

        if (isTimeAvailable(time, day, sched)) {times.push(time)}

        if (sched[day] === 'Closed') {
            times = []
        } else {
            const idx = resTimes.indexOf(time)
            const rotateIdx = (idx, arr) => {
                return arr[idx % arr.length]
            }

            for (let i = 1; i <= 2; i++) {
                let up = isTimeAvailable(rotateIdx(idx+i, resTimes), day, sched)
                let down = isTimeAvailable(rotateIdx(idx-i, resTimes), day, sched)
                if (up) times.push(up);
                if (down) times.unshift(down);
            }
        }
        
        if ((times.length) === 0) {
            return <div id='none-available-container'>
                <FaExclamationCircle id='none-svg' size={24} />
                    <p id='none-available'>At the moment, there's no online availability within 2.5 hours of {time}.</p>
                </div>
        } else {
            return (
                <div id='res-time-grid'>
                    {times.map(ele => 
                        <button key={ele}
                            type='submit'
                            value={ele}
                            className='res-button'
                            onClick={this.handleTimeButtonClick}
                        >
                            {ele}
                        </button>
                    )}
                </div>
            )
        }
    }

    handleSubmit() {
        if (this.props.user.id) {
            const { date, time, party_size } = this.state
            const reservation = {
                party_size: parseInt(party_size.slice(4)),
                user_id: this.props.user.id,
                restaurant_id: this.props.restaurantId,
                time: time,
                day: date.day,
                month: date.month,
                year: date.year,
            };
            this.props.processForm(reservation)
            .then(this.props.requestUpcomingReservations('upcoming'))
            .then( (reservation) => {
                this.setState({ showResTimes: false })
                this.props.openModal({modal:'reservation-confirmation',
                    data: {
                        reservation: reservation,
                        restaurantId: this.props.restaurantId
                    }
                });
            }) 
        } else {
            this.props.openModal({modal: 'signup', data: null})
        }    
    }

    render() {
        const { date, time, party_size, showCalendar, showParty, showTimes, showResTimes} = this.state
        const today = new Date()
        let maxDate = new Date(today)
        maxDate.setDate(maxDate.getDate() + 365)

        return (   
            <div id='make-res-container'
                onClick={()=>{if(document.querySelector('.drop-content')) {
                    this.closeDropdowns()
                }}}
            >        
                <div id='make-res'>
                    <p className='res-form-title'>Make a Reservation</p>

                    <form action="" method="post"
                        className='res-form'
                        onSubmit={this.handleSubmit}
                    >                   
                            
                        <label className='res-input-title'>Party Size</label>
                        <div className='res-input-field'
                            onClick={this.openPartyDropdown}
                        >                            
                            <p className="res-input-text">{party_size}</p>
                            <span className='res-chevron'><FaChevronDown size={10}/></span>
                            {showParty ?
                            <div className='drop-content' id='res-party-drop'>
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

                        <div id='res-input-second-row'>
                            <div className='res-input-container'>
                                <label className='res-input-title'>Date</label>
                                <div className='res-input-field' onClick={this.openCalendar}>
                                    <div className="res-input-text" >{monthArray[date.month]} {date.day} {date.year}</div> 
                                    <span className='res-chevron'><FaChevronDown size={10}/></span>
                                    {showCalendar ?
                                    <div className='drop-content' id='res-calendar-drop' onClick={e => e.stopPropagation()}>
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
                            <span className='res-chevron'><FaChevronDown size={10}/></span>
                            {showTimes ?
                            <div className='drop-content' id='res-time-drop'>
                                {resTimes.map((t, i) => {
                                    return (
                                    <option id='drop-item'
                                        key={i}
                                        onClick={this.update('time')}
                                    >{t}</option>
                                    )
                                })}
                            </div>            
                            : null}                             
                        </div>
                        </div>

                    </div>

                    { showResTimes ?
                        this.timeComponents() :
                        <div className='res-button'
                            onClick = {this.handleFindTable} 
                        >Find a table</div>                    
                    }
                    </form>
                </div>
            
                <RestaurantSchedule schedule={this.props.schedule} />                
            </div> 
        )
    }
}

export default ReservationForm