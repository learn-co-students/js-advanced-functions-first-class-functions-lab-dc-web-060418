// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr){
    return driverArr.slice(0,2)
}

const returnLastTwoDrivers = function(driverArr){
    return driverArr.slice(driverArr.length-2,driverArr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (num) => (num * multiplier)
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers)
}