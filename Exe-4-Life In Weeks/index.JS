
/*For this challenge, assume there are 365 days in a year,52 weeks in a year and 12 months in a year.
In this challenge, I am going to create a function that tells us how many days,weeks and months we have left if we live until 90 years old. */

function lifeInWeeks(age) {

var remainingYears=90-age;
var days=remainingYears*365;
var weeks=remainingYears*52;
var months=remainingYears*12;
console.log("You have " +days +" days, "+ weeks+ " weeks, and "+ months+ " months left.");

}


lifeInWeeks(32)
