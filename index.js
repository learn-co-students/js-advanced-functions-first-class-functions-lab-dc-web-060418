// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){

  // Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
      const twoDrivers = [];
      twoDrivers.push(driverArray[0]);
      twoDrivers.push(driverArray[1]);
      return twoDrivers;
}


const returnLastTwoDrivers = function(driverArray){
  const lastTwoDrivers = [...driverArray.slice(-2)];
  return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier= function(fare){
  return function(x){
    return fare * x;
  };
}

const fareDoubler= function(fare){
  return function(){
    return createFareMultiplier(fare)(2);
  }();
}

const fareTripler= function(fare){
  return function(){
    return createFareMultiplier(fare)(3);
  }();
}

const selectDifferentDrivers= function(arrayOfDrivers, functionArgument){
  return functionArgument(arrayOfDrivers);
}
