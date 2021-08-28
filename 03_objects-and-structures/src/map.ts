//The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//Any value (both objects and primitive values) may be used as either a key or a value.
//TypeScript Map is a new data structure introduced in ES6. A Map allows to store key-value pairs, similar to the maps in other programming languages e.g. Java or C#.

//Creating a Map
//Create Empty Map
let nameAgeMapping = new Map();

//Create Map with Initial Entries
let myMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
    ]); 


//Add, retrieve, delete entries from Map 
//1. Add entries
nameAgeMapping.set("Lokesh", 37);
nameAgeMapping.set("Raj", 35);
nameAgeMapping.set("John", 40);
 
//2. Get entries
nameAgeMapping.get("John");     //40
 
//Check entry is present or not
nameAgeMapping.has("Lokesh");       //true
nameAgeMapping.has("Brian");        //false
 
//Size of the Map
nameAgeMapping.size;                //3
 
//Delete an entry
nameAgeMapping.delete("Lokesh");    // true
 
//Clear whole Map
nameAgeMapping.clear();             //Clear all entries


//Iterating over Map Entries
//1. Iterate over map keys
for (let key of nameAgeMapping.keys()) {
    console.log(key);                   //Lokesh Raj John
}
 
//2. Iterate over map values
for (let value of nameAgeMapping.values()) {
    console.log(value);                 //37 35 40
}
 
//3. Iterate over map entries
for (let entry of nameAgeMapping.entries()) {
    console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}
 
//4. Using object destructuring
for (let [key, value] of nameAgeMapping) {
    console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
} 


let map = new Map([["key1", "value1"], ["key2", "value2"]]);

//accessed a value by using a key of the same type as defined in the constructor; if a key does not exist in the map, an undefined value is returned
let value1: string | undefined = map.get("key1");
let value2: string | undefined = map.get("key3");
console.log(value1); // prints value1
console.log(value2); // prints undefined 

//creates two maps, without providing initial values
let map2 = new Map(); //doesn't use the generic definition; hence, falls back to the type any for the key and the value (key->any, value->any)
let map3 = new Map<string, number>(); //initialization that specifies the generic type to have a key of string and a value of a number (key->string, value->number)

//NOT COMPILE: because the key type must be the same
let map4 = new Map([[1, "value1"], ["key2", "value2"]]); // Does't compile

//Add, retrieve, delete entries from Map 
map.set("key3", "value3"); //add entry
map.has("key1"); //look up to see whether a key exists in the map by returning true or false
map.delete("key1"); //remove an entry (similar to delete obj.key1 (index signature))
console.log(map.get("key3")); // prints value3
console.log(map.get("key1")); // prints undefined