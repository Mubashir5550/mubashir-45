"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["mango", "watermelon", "pomegranate"];
if (favorite_fruits.includes("watermelon")) {
    console.log("you really like watermilon.");
}
;
if (favorite_fruits.includes("mango")) {
    console.log("you really like mango.");
}
;
if (favorite_fruits.includes("pomegranate")) {
    console.log("you really like pomegranate.");
}
;
if (favorite_fruits.includes("banana")) {
    console.log("you really like banana.");
}
else {
    console.log("banana are not in your list of favorite fruits");
}
if (favorite_fruits.includes("grapes")) {
    console.log("you really like grapes.");
}
else {
    console.log("grapes are not in your list of favorite fruits");
}
