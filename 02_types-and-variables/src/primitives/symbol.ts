//Symbol allows the creation of a value that is unique.
//A Symbol is different than a constant because two constants with the same value are equal, while this is not the case with two symbols with the same value
let s100 = Symbol("same");
let s101 = Symbol("same");
if (s100 === s101) {
    console.log("Same"); // won't print
}

const c1 = "s";
const c2 = "s";
if (c1 === c2) {
    console.log("Same"); // will print
}


//Symbol can be used when defining a field to an object, to be sure to define every field once
const field1 = Symbol("field");
const myobj = {
    [field1]: "field1 value"
};
console.log(myobj[field1]); // Print "field1 value"


//before using the Symbol keyword, the tsconfig.json must add lib to the array:
// "compilerOptions": {    
//     "lib": [
//         "es2015.symbol",
//         "es2015"        
//     ]
// }