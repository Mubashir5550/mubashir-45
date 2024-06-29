// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function Make_shirt2(size: string , message: string): void {
    console.log(`you have ordered a ${size} sized with the message, ${message}:`)
}
// call the function 
Make_shirt2("large", "i love typescript")
// make the medium shirt with the default message 
Make_shirt2("medium", "i love typescript")
// and third time make the any size of shirt with the different message
Make_shirt2('small', 'keep work on it')



