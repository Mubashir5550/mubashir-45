// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type car = {
    manufacturer : string;
    Model : string;
    [key: string ]: any; 

}

function carDetails(manufacturer: string, Model: string, options: Partial<car>): car{
    return {
        manufacturer : manufacturer,
        Model : Model,
        ...options
    }
}

let Car = carDetails("AUDI", "A5", {
    color: "Black",
    year: 2020})

console.log(Car)