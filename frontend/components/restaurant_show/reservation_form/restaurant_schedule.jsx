import React from 'react'
import { time24ToAmPm } from '../../../util/general_utils'
import { FiClock } from 'react-icons/fi'

function RestaurantSchedule(props) {
    const sch = props.schedule
    
    const week = [
        {
            day: 'Mon',
            status: sch.monday,
            open: sch.mondayOpen,
            close: sch.mondayClose,
            text: '',
        }, {
            day: 'Tue',
            status: sch.tuesday,
            open: sch.tuesdayOpen,
            close: sch.tuesdayClose,
            text: '',
        }, {
            day: 'Wed',
            status: sch.wednesday,
            open: sch.wednesdayOpen,
            close: sch.wednesdayClose,
            text: '',
        }, {
            day: 'Thu',
            status: sch.thursday,
            open: sch.thursdayOpen,
            close: sch.thursdayClose,
            text: '',
        }, {
            day: 'Fri',
            status: sch.friday,
            open: sch.fridayOpen,
            close: sch.fridayClose,
            text: '',
        }, {
            day: 'Sat',
            status: sch.saturday,
            open: sch.saturdayOpen,
            close: sch.saturdayClose,
            text: '',
        }, {
            day: 'Sun',
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
            day.text = `${time24ToAmPm(day.open)}-${time24ToAmPm(day.close)}`
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
                        <p className='schedule-text'>{day.day}:</p>
                        <p className='schedule-text'>{day.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RestaurantSchedule