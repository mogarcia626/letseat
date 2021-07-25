import React from 'react'
import { time24To12 } from '../../../util/general_utils'
import { FiClock } from 'react-icons/fi'

function RestaurantSchedule(props) {
    const sch = props.sch
    const week = {
        Monday: {
            status: sch.monday,
            open: sch.mondayOpen,
            close: sch.mondayClose,
            text: '',
        },
        Tuesday: {
            status: sch.tuesday,
            open: sch.tuesdayOpen,
            close: sch.tuesdayClose,
            text: '',
        },
        Wednesday: {
            status: sch.wednesday,
            open: sch.wednesdayOpen,
            close: sch.wednesdayClose,
            text: '',
        },
        Thursday: {
            status: sch.Thursday,
            open: sch.ThursdayOpen,
            close: sch.ThursdayClose,
            text: '',
        },
        Friday: {
            status: sch.Friday,
            open: sch.FridayOpen,
            close: sch.FridayClose,
            text: '',
        },
        Saturday: {
            status: sch.saturday,
            open: sch.saturdayOpen,
            close: sch.saturdayClose,
            text: '',
        },
        Sunday: {
            status: sch.sunday,
            open: sch.sundayOpen,
            close: sch.sundayClose,
            text: '',
        },
    }

    Object.keys(week).forEach(day => {
        if (sch.day.status === 'Closed') {
            sch[day] = `${day}: Closed`
        } else {
            sch[day] = `${day}: ${time24To12(sch[day])}-${time24To12(sch[day])}`
        } 
    });

    return (
        <div>
            <div>
                <FiClock />
                <p>Hours of operation</p>
            </div>

            <div>
                <p>{sch.Monday}</p>
                {/* <p>{tue}</p>
                <p>{wed}</p>
                <p>{thu}</p>
                <p>{fri}</p>
                <p>{sat}</p>
                <p>{sun}</p> */}
            </div>
        </div>
    )
}

export default RestaurantSchedule