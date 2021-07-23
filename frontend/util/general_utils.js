export const restaurantCuisinesList = ['Thai', 'Chinese', 'Japanese', 'Seafood & Steakhouses', 'Latin American Cuisine'];

export const ratingsCategoryList = ['value', 'food', 'ambience', 'service'];

export const cityList = ['Orlando, FL', 'New York, NY', 'San Francisco, CA', 'Austin, TX']

export const resTimes = [
    "12:00 AM", "12:30 AM",
    "1:00 AM", "1:30 AM",
    "2:00 AM", "2:30 AM",
    "3:00 AM", "3:30 AM",
    "4:00 AM", "4:30 AM",
    "5:00 AM", "5:30 AM",
    "6:00 AM", "6:30 AM",
    "7:00 AM", "7:30 AM",
    "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM",
    "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM",
    "10:00 PM", "10:30 PM",
    "11:00 PM", "11:30 PM"
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

export const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']

export function dayOfTheWeek(year, month, day) {
    const date = new Date(year, month, day)
    return dayArray[date.getDay()]
}