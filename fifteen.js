"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_names = ["Yousuf siyal,", "Aqib mahar", "Waqas Ali"];
//one person can't attend the dinner
let person_not_come = guest_names[2];
//now print a message to that person who can't make dinner
console.log(person_not_come + " " + "can't make the dinner"); //concatination method
let person = "Ali";
//replace the into the array
guest_names[guest_names.indexOf(person_not_come)] = person;
// now print a message to all in my list
guest_names.forEach(invite => {
    console.log(`Hello! ${invite} "you are invited to the dinner`);
});
