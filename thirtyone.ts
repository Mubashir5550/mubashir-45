// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let friends_name : string[] = ["mubashir", "yousuf", "sameer"]; 

// check if the list of users is not empty
if (friends_name.length > 0 ) {
// now print each user through the loop
    for(let user of friends_name) {
        console.log("user:" + user)
    }


} else{
    console.log("we need  to find some users!")
} 

// now remove all from the array
let null_name : string[] = [];

if (null_name.length > 0 ) {
    // now print each user through the loop
        for(let user of null_name) {
            console.log("user:" + user)
        }
    
    
    } else{
        console.log("we need to find some users!")
    };


