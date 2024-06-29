

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["sameer", "yousuf", "rafay"]
function show_magicians(Magicians: string[]): void {
    magicians.forEach(magician=>

    console.log(magician))

}

show_magicians(magicians)