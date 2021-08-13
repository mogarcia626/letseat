import { BiCoinStack } from "react-icons/bi";

export const proUrl = 'https://let-s-eat.herokuapp.com/#/';
export const devUrl = 'http://localhost:3000/#/';
        
export const restaurantCuisinesList = ['Thai', 'Chinese', 'Japanese', 'Seafood & Steakhouses', 'Latin American Cuisine'];

export const ratingsCategoryList = ['value', 'food', 'ambience', 'service'];

export const cityList = ['Orlando, FL', 'New York, NY', 'San Francisco, CA', 'Austin, TX']

export const resTimes = [
    "12:00am", "12:30am",
    "1:00am", "1:30am",
    "2:00am", "2:30am",
    "3:00am", "3:30am",
    "4:00am", "4:30am",
    "5:00am", "5:30am",
    "6:00am", "6:30am",
    "7:00am", "7:30am",
    "8:00am", "8:30am",
    "9:00am", "9:30am",
    "10:00am", "10:30am",
    "11:00am", "11:30am",
    "12:00pm", "12:30pm",
    "1:00pm", "1:30pm",
    "2:00pm", "2:30pm",
    "3:00pm", "3:30pm",
    "4:00pm", "4:30pm",
    "5:00pm", "5:30pm",
    "6:00pm", "6:30pm",
    "7:00pm", "7:30pm",
    "8:00pm", "8:30pm",
    "9:00pm", "9:30pm",
    "10:00pm", "10:30pm",
    "11:00pm", "11:30pm"
];

export const resParty = [
    "2 people",
    "3 people",
    "4 people",
    "5 people",
    "6 people",
    "7 people",
    "8 people",
    "9 people",
    "10 people",
    "11 people",
    "12 people",
];

export const resParty2 = [
    "For 2",
    "For 3",
    "For 4",
    "For 5",
    "For 6",
    "For 7",
    "For 8",
    "For 9",
    "For 10",
    "For 11",
    "For 12",
];

export const monthArray = ['Jan', 'Feb', 'Mar', 'Apr',
'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function selectBackground(location) {
    switch (location) {         
        case 'Orlando, FL':
            return 'search-bar-orlando'
        case 'New York, NY':
            return 'search-bar-new-york'
        case 'San Francisco, CA':
            return 'search-bar-san-francisco'
        case 'Austin, TX':
            return 'search-bar-austin'
        default:
            return 'search-bar-default';
    };
}

export const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function convertDay(year, month, day) {
    const dayObj = {
        'Sun': 'sunday',
        'Mon': 'monday',
        'Tue': 'tuesday',
        'Wed': 'wednesday',
        'Thu': 'thursday',
        'Fri': 'friday',
        'Sat': 'saturday'
    }
    const date = new Date(year, month, day)
    return dayObj[dayArray[date.getDay()]]
}

export function dayOfTheWeek(year, month, day) {
    const date = new Date(year, month, day)
    return dayArray[date.getDay()]
}

export function time24ToAmPm(num) {

    const time = `${num}.0`
    const timeArr = time.split('.')

    let amPm = 'am'
    let hourInt = parseInt(timeArr[0])

    if (hourInt >= 12 && hourInt < 24)  amPm = 'pm'

    if (hourInt === 0 || hourInt === 12 || hourInt === 24) {
        hourInt = 12
    } else {
        hourInt = hourInt % 12
    }

    let min;
    if (timeArr[1].length === 1) {
        min = parseInt(`${timeArr[1]}0`)*6/10
    } else {
        min = parseInt(timeArr[1])*6/10
    }

    if (min < 10) {
        min = '0' + min.toString()
    } else {
        min.toString()
    }

    return `${hourInt}:${min}${amPm}`
}

export function timeAmPmTo24(timeStr) {
    const arr = timeStr.split(':')
    const l = arr[1].length - 2

    let hours = parseInt(arr[0])
    let minutes = parseInt(arr[1].slice(0,l))
    const amPm = arr[1].slice(l)
    
    if (amPm === 'pm' && hours !==12) {
        hours += 12
    } else if (hours===12 && amPm === 'am') {
        hours = 24
    }

    minutes /= 60.0

    return hours + minutes
}

export function isTimeAvailable(time, day, schedule) {
    // console.log(day)
    
    let t = timeAmPmTo24(time)
    // console.log(day)
    if (schedule[day] === 'Open' && 
        t >= schedule[`${day}Open`] &&
        t < schedule[`${day}Close`]
    ) {
        return time
    }
}