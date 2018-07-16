// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(drivers.length -2, drivers.legnth)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function (value) {
        return value * multiplier
    }
}

const fareDoubler = function (fare) {
    return fare * 2;
}

const fareTripler = function (fare) {
    return fare * 3;
}

const selectDifferentDrivers = function (array, fn) {
    return fn(array);
}