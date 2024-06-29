// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let guest_names4 : string[] = ["Yousuf siyal,", "Aqib mahar", "Waqas Ali"];  
 //one person can't attend the dinner

let person_not_come3: string = guest_names4[2];
//now print a message to that person who can't make dinner
// console.log(person_not_come3 +" "+ "can't make the dinner") //concatination method

let person3:string="Ali"
//replace the into the array
guest_names4[guest_names4.indexOf(person_not_come3)]=person3
// now print a message to all in my list
guest_names4.forEach(invite=>{
    // console.log(`Hello! ${invite} " i found a bigger dinner so i inviting some more guest`)

});

let newInvit: string="sameer magsi"
guest_names4.unshift(newInvit);
// console.log(guest_names1);

let newInvitep: string="hasnain shaikh"
let index2=guest_names4.length/2;
guest_names4.splice(index2,0,newInvitep);
// console.log(guest_names1)

let newInvite3 : string="lareb"
guest_names4.push(newInvite3);

guest_names4.forEach(called=>{
// console.log(` ${called} "you are invited for a Dinner`)
});

console.log(guest_names4.length+" "+ "guest" +" "+ " are invited for a Dinner" );