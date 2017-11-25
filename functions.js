import moment from 'moment'

const MILLISECONDS_DAY = 86400000
const FACILITY_TYPE = {
    HOTEL_INFO: 1100,
    RESTAURANT: 1200,
    IN_ROOM: 1300,
    SPA: 1400,
    ROOM_CLEANING: 1600,
    REQUEST_ITEM: 1500,
    ACTIVITY: 1800,
    SOUVENIR: 1700
}

const sumNotification = array => {
    return array.reduce((acc, value) => acc+value, 0)
}

const getFacilityTypeFromRoute = name => {
    let id;
    switch (name) {
        case 'info':
            id = FACILITY_TYPE.HOTEL_INFO
            break

        case 'spa':
            id = FACILITY_TYPE.SPA
            break

        case 'restaurant':
            id = FACILITY_TYPE.RESTAURANT
            break
    }

    return id
}

const extractString = input => {
    if(!input) return false
    //return input.indexOf('data:image/png;base64,')? input : input.split('data:image/png;base64,')[1]
    return input.search(/data:image\/.*;base64,/g)? input : input.split(/data:image\/.*;base64,/g)[1]
}

const getDayCountFromDate = (date, current) => {
    let dateSelected = moment(date).valueOf()
    let currentDate = moment(current).valueOf()
    return Math.round(Math.abs((dateSelected-currentDate)/MILLISECONDS_DAY))
}

export {
    sumNotification,
    getFacilityTypeFromRoute,
    extractString,
    getDayCountFromDate
}