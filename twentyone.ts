//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let idCard : cardType = {
    myName : "mubashir Ali",
    fatherName : "Qurabn ali",
    collageName : "credo collage",
    gmail: "mubashirtalpur306@gmail.com",
    rollNumber: 282505,
    age: 18

};
//data types
type cardType = {
    myName : string
    fatherName : string
    collageName : string
    gmail : string
    rollNumber : number
    age : number
};
console.log(idCard);