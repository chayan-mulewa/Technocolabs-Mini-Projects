// myAge variable holds the age in human years.

let myAge = 22;

// earlyYears variable represents the first two years of a dog's life.

let earlyYears = 2;

// Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5.

earlyYears *= 10.5;

// laterYears variable represents the remaining years after the first two.

let laterYears = myAge - 2;

// each remaining year is equivalent to 4 dog years.

laterYears *= 4;

// Print earlyYears and laterYears to the console for checking.

console.log(earlyYears, laterYears);

// myAgeInDogYears variable represents the total age in dog years by Adding earlyYears and laterYears together, and store that in a variable named myAgeInDogYears..

let myAgeInDogYears = earlyYears + laterYears;


// myName variable holds the lowercase version of your name.

let myName = "John".toLowerCase();

// Display your name and age in dog years using string interpolation.
// The console.log statement displays the name and age in both human and dog years.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
