//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let name1 = "Mubashir"
let name2 = "Haider"

// equality and inequality

console.log("Is name2 == 'Haider is equal to fine?' i predict true ")
console.log(name2 == "Haider")
console.log("Is name1 == 'Mubashir is equal to name2?' i predict false")
console.log(name1 == name2)

// • Tests using the lower case function

console.log("Is Mubashir == 'is equal to name1 after converting lowercase?' i predict false")
console.log(`${name1}`.toLowerCase() === "Haider" )


let number1 : number = 20
let number2 : number = 15

// true condition

console.log("Is number1 == 'is equal to 15' i predict true")
console.log(number1 == 20)

//  false condition

console.log("Is number1 == 'is equal to 15' i predict false")
console.log(number1 == number2)

// less than 

console.log("Is number1 == 'is less than number2'i predect true")
console.log(number1 < number2)

//greater than

console.log("Is number1 == 'is gretar than number2' i predict false")
console.log(number1 > number2)

// greater than or equal to
console.log("Is number1 == 'is greater than or equal to 20' i predict true")
console.log(number1 >= 20 )

// less than equal to
console.log("Is number1 == ' is less than or equal to 15' i predict true")
console.log(number1 <= 15)

//create another variable 

let bool1: boolean = true
let bool2: boolean = false 

console.log("is bool1 true or bool2 false? i predict true.");
console.log(bool1 && bool2);

console.log("is bool1 true or bool2 false? i predict true.");
console.log(bool1 || bool2);


// • Test whether an item is in a array
let array1 :number[] = [5, 4, 3, 2, 1];
console.log("is 5 in the array1? i predict true.")
console.log(array1.includes(5));

// • Test whether an item is not in a array
console.log("is 7 not in the array? i predict true");
console.log(array1.includes(7));
