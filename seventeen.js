"use strict";
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestNames = ["Yousuf siyal,", "Aqib mahar", "Waqas Ali"];
//one person can't attend the dinner
let person_not_come2 = guestNames[2];
//now print a message to that person who can't make dinner
// console.log(person_not_come2 +" "+ "can't make the dinner") //concatination method
let person2 = "Ali";
//replace the into the array
guestNames[guestNames.indexOf(person_not_come2)] = person2;
// now print a message to all in my list
guestNames.forEach(invite => {
    // console.log(`Hello! ${invite} " i found a bigger dinner so i inviting some more guest`)
});
let guest = "sameer magsi";
guestNames.unshift(guest);
// console.log(guest_names1);
let guest1 = "hasnain shaikh";
let index1 = guestNames.length / 2;
guestNames.splice(index1, 0, guest1);
// console.log(guest_names1)
let guest2 = "lareb";
guestNames.push(guest2);
guestNames.forEach(called => {
    //console.log(`${called} "you are invited for a dinner"`)
});
// First line of exercise seventeen
console.log("sorry i have space for only two guest ");
// remove guest by using loop & pop
console.log(guestNames);
while (guestNames.length > 2) {
    let removeperson = guestNames.pop();
    console.log(`Dear" ${removeperson} sorry, i can't invite you for a Dinner`);
}
//print message for thore who are still invited
guestNames.forEach(called => {
    console.log(`Dear ${called} you are still invited to Dinner!`);
});
// create epmty list 
guestNames.pop();
guestNames.pop();
console.log(guestNames);
