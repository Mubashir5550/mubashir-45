

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned

function city_country(city: string, country: string): string {
    return `${city} ${country}`
};
//call the function with three city_country 
let callCountry1: string = city_country("lahore", "pakistan")
let callCountry2: string = city_country("torento", "canada")
let callCountry3: string = city_country("Germany", "Europe")

//print the value returned by function
console.log(callCountry1)
console.log(callCountry2)
console.log(callCountry3)