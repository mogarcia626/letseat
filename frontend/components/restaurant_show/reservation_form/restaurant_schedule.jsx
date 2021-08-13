import React from 'react'
import { time24To12 } from '../../../util/general_utils'
import { FiClock } from 'react-icons/fi'

function RestaurantSchedule(props) {
    const sch = props.schedule
    
    const week = [
        {
            day: 'Monday',
            status: sch.monday,
            open: sch.mondayOpen,
            close: sch.mondayClose,
            text: '',
        }, {
            day: 'Tuesday',
            status: sch.tuesday,
            open: sch.tuesdayOpen,
            close: sch.tuesdayClose,
            text: '',
        }, {
            day: 'Wednesday',
            status: sch.wednesday,
            open: sch.wednesdayOpen,
            close: sch.wednesdayClose,
            text: '',
        }, {
            day: 'Thursday',
            status: sch.thursday,
            open: sch.thursdayOpen,
            close: sch.thursdayClose,
            text: '',
        }, {
            day: 'Friday',
            status: sch.friday,
            open: sch.fridayOpen,
            close: sch.fridayClose,
            text: '',
        }, {
            day: 'Saturday',
            status: sch.saturday,
            open: sch.saturdayOpen,
            close: sch.saturdayClose,
            text: '',
        }, {
            day: 'Sunday',
            status: sch.sunday,
            open: sch.sundayOpen,
            close: sch.sundayClose,
            text: '',
        },
    ]

    week.forEach(day => {
        
        if (day.status === 'Closed') {
            day.text = `Closed`
        } else {
            day.text = `${time24To12(day.open)}-${time24To12(day.close)}`
        } 
    });

    return (
        <div id='schedule-container'>

            <div id='schedule-header'>
                <FiClock />
                <p id='schedule-title'>Hours of operation</p>
            </div>

            <div id='schedule-hours'>
                {week.map( day => (
                    <div key={day.day} className='schedule-item'>
                        <p className='schedule-text'>{day.day.slice(0,3)}:</p>
                        <p className='schedule-text'>{day.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RestaurantSchedule