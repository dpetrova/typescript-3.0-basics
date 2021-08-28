//const does not allow you to change the reference of the variable, however, you can change the content of the variable

const arr: number[] = [1, 2, 3];
//COMPILE
arr.push(4);
console.log(arr); // prints [ 1, 2, 3, 4 ]
//NOT COMPILE
arr = [5, 6, 7]


const myObj: { x: number } = { x: 1 };
console.log(myObj); // prints { x: 1 }
//COMPILE
myObj.x = 2;
console.log(myObj); // prints { x: 2 }
//NOT COMPILE
myObj = {}


//two variables are clearly defined at the global scope, as well as the function scope. There is no doubt that they are two distinct variables
const myvar = 2;
console.log(myvar); // prints 2

function z() {
   let myvar = 3;
   console.log(myvar); // prints 3
}

z();