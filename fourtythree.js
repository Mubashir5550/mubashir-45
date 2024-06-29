// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians2(Magicians2) {
    magicians2.forEach(function (magician2) { return console.log(magician2); });
}
function make_great2(magicians2) {
    return magicians2.map(function (magicians2) { return "the Great " + magicians2; });
}
var magicians2 = ["sameer", "yousuf", "rafay"];
var great_magician = make_great2(__spreadArray([], magicians2, true));
console.log("original magician");
show_magicians2(magicians2);
console.log("\nGreat magician:");
show_magicians2(great_magician);
