// any is a wildcard type that allows not only any type but also to change the type at will
let changeMe: any;
changeMe = 1;
changeMe = "string too";
changeMe = false;

//use of any should be avoided because it can hold a value that is not as expected and still it can compile 
//because TypeScript does not know the type and cannot perform validation
let anyDangerous: any = false;
console.log(changeMe.subString(0, 1)); // Compile, but crash at runtime
console.log(anyDangerous.subString(0, 1)); // Compile, but crash at runtime


//avoid using any type!!!

//use any only in two situations:
// - when you are migrating code from JavaScript to TypeScript and be in a hybrid mode for a while
// - when you are in a situation that you cannot figure out the type in some advanced scenario