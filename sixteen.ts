// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest_names1 : string[] = ["Yousuf siyal,", "Aqib mahar", "Waqas Ali"];  
 //one person can't attend the dinner

let person_not_come1: string = guest_names1[2];
//now print a message to that person who can't make dinner
console.log(person_not_come1 +" "+ "can't make the dinner") //concatination method

let person1:string="Ali"
//replace the into the array
guest_names1[guest_names1.indexOf(person_not_come1)]=person1
// now print a message to all in my list
guest_names1.forEach(invite=>{
    console.log(`Hello! ${invite} " i found a bigger dinner so i inviting some more guest`)

});

let newInvite: string="sameer magsi"
guest_names1.unshift(newInvite);
// console.log(guest_names1);

let newInvite1: string="hasnain shaikh"
let index=guest_names1.length/2;
guest_names1.splice(index,0,newInvite1);
// console.log(guest_names1)

let newInvite2 : string="lareb"
guest_names1.push(newInvite2);

guest_names1.forEach(called=>{
console.log(` ${called} "you are invited for a Dinner`)
});
    
