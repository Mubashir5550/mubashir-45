// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let user_names : string[] = ["junaid","mudabir", "yousuf", "mubashir", "rehan"]
let new_user : string[] = ["kashif", "sameer", "Yousuf", "Mubashir", "Aqib" ]

for( let exist_user of new_user){
    //convert both the new user names and existing usernames to lowercase for case insensitive
    let lowercase_exist_user = exist_user.toLowerCase();
    let found = false

    
    for(let existing_user of user_names ){
        if(existing_user.toLowerCase() ===  lowercase_exist_user){
            found = true
            break
        }
    }

    //print a message bases on whether the usernames availble or not
    if(found){
        console.log(`usernames '${exist_user}' is not available please enter a new usernames `)
    }else{
        console.log(`usernames '${exist_user}}' is available`)
    }

}
