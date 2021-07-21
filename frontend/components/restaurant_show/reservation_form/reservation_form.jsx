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
            <div id='reservation-form'>
                <h3>Make a Reservation</h3>
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <label>Party Size</label>

                        <div onClick={this.openPartyDropdown} >                            
                            <div className="search-text">
                                {party_size}
                            </div>

                            <FaChevronDown size={16}/>
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

                    <label>Date</label>
                    <div onClick={this.openCalendar}>
                        <div className="search-text" >{monthArray[date.month]} {date.day} {date.year}</div> 
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

                    <label>Time</label>
                        <div onClick={this.openTimeDropdown} >
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

                    <button>Find a table</button>
                </form>
            </div>
        )
    }
}

export default ReservationForm

      

//     

//     render() {      
//           
        
//         return (
//             <form className="search-modal-form"
//                 onSubmit={this.handleSubmit}
//             >
//                 <div className='search-content'>
//                     <div className='dropdown-inputs'>

//                         

//                         

//                         <div  id='right-dropdown-input'
//                             className="search-modal-dropdown-item"
//                             onClick={this.openPartyDropdown}
//                         >
//                             <FaRegUser size={20}/>
//                             <div className="search-text">
//                                 {party_size}
//                             </div>

//                             <FaChevronDown size={16}/>
//                             {showParty ?
//                             <div className='drop-content' id='party-options'>
//                                 {resParty.map((party, i) => {
//                                     return (
//                                     <option id='drop-item'
//                                         key={i}
//                                         onClick={this.update('party_size')}
//                                     >{party}</option>
//                                     )
//                                 })}
//                             </div>            
//                             : null} 
//                         </div>
                        
//                     </div>
//                     <br />
//                     <input className="search-modal-search"
//                         placeholder="Location, Restaurant, or Cuisine"
//                         type="text"
//                         value={search}
//                         onChange={this.update('search')}
//                     />
//                     <br />
//                     <button 
//                         className='search-button'>
//                             Let's go
//                     </button>

                    
//                 </div>
                
//             </form>
//         );
//     }
// };
