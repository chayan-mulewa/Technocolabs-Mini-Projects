// The variable kelvin is set to 293 and will remain constant throughout the program.

const kelvin = 293;

// Celsius is 273 degrees less than Kelvin. Subtracting 273 from kelvin gives the temperature in Celsius.

const celsius = kelvin - 273;

// The Fahrenheit temperature is calculated using the formula. The variable is declared with 'let' to allow its value to be changed.

let fahrenheit =  celsius * (9/5) + 32;

// The .floor() method is used to round down the Fahrenheit temperature to the nearest integer.

fahrenheit = Math.floor(fahrenheit);

// Display the temperature in Fahrenheit

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton scale

const newton = Math.floor(celsius * (33/100));

// Round down the Newton temperature

console.log(`The temperature is ${newton} Newton.`);
