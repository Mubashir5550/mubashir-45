// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var fav_animals = ["dear", "lion", "elephent"];
for (var _i = 0, fav_animals_1 = fav_animals; _i < fav_animals_1.length; _i++) {
    var animals = fav_animals_1[_i];
    console.log("A ".concat(animals, " would make a great zoo"));
}
console.log("\nThese animals are very frndly to us ");
