// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["sameer", "yousuf", "rafay"];
function show_magicians(Magicians) {
    magicians.forEach(function (magician) {
        return console.log(magician);
    });
}
show_magicians(magicians);
