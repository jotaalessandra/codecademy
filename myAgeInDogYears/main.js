// My age
var myAge = prompt('Cual es tu edad?');

// Early years
var earlyYears = 2;

earlyYears = earlyYears * 10.5;

laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears;

console.log(myAgeInDogYears);

var name = prompt('Cual es tu nombre?').toLowerCase();

document.write(`Hello ${name}! You have ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);