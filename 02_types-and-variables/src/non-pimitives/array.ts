//an array can be created in two different ways:

//using the square brackets
let arrayWithSquareBrackets = [1, 2, 3];
let arrayWithSquareBracketsWithType: number[] = [1, 2, 3]; //specify the type

// using the Array generic object
let arrayWithObject: Array<number> = [1, 2, 3];
let arrayWithObjectNew: Array<number> = new Array<number>(1, 2, 3);

console.log(arrayWithSquareBrackets); // prints [ 1, 2, 3 ]
console.log(arrayWithSquareBracketsWithType); // prints [ 1, 2, 3 ]
console.log(arrayWithObject); // prints [ 1, 2, 3 ]
console.log(arrayWithObjectNew); // prints [ 1, 2, 3 ]


//it is possible to have an array holding more than one type
let arrayWithSquareBrackets2: (number | string)[] = [1, 2, "one", "two"];
let arrayWithObject2: Array<number | string> = [1, 2, "one", "two"];


//access the content by using the index position
const position1 = arrayWithObject2[0]; // 1
//if a position doesn't contain a value, the type returned is undefined
const unexisting = arrayWithObject2[100]; // undefined

console.log(position1); // prints 1
console.log(unexisting); // prints undefined


//loop an array and retrieve for each position the element
//the type is optional because TypeScript can infer the type (so the following code can be written with or without the number type)
arrayWithSquareBrackets.forEach((element: number) => {
    console.log(element); // 1
});                       // 2
                          // 3 