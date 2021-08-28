//The Set object lets you store unique values of any type, whether primitive values or object references.
//Set is a new data structure introduced in ES6, similar to Map. 
//A typescript Set allows us to store distinct values into a List similar to other programming languages e.g. Java, C#.

//Create Set
let diceEntries = new Set();


//Add, retrieve and delete Values from a Set
//Add values
diceEntries.add(1);
diceEntries.add(2);
diceEntries.add(3);
diceEntries.add(4).add(5).add(6);   //Chaining of add() method is allowed
 
//Check value is present or not
diceEntries.has(1);                 //true
diceEntries.has(10);                //false
 
//Size of Set 
diceEntries.size;                   //6
 
//Delete a value from set
diceEntries.delete(6);              // true
 
//Clear whole Set
diceEntries.clear();                //Clear all entries


//Iterating over a Set
//Iterate over set entries
for (let currentNumber of diceEntries) {
    console.log(currentNumber);     //Prints 1 2 3 4 5 6
}
 
// Iterate set entries with forEach
diceEntries.forEach(function(value) {
  console.log(value);               //Prints 1 2 3 4 5 6
});