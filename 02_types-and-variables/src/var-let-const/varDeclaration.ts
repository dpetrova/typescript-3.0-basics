//NOT COMPILE: Won't create a variable in TypeScript
function f1() {
    a = 2; // no explicit "var", hence global scope instead of function scope
}

//NOT COMPILE: Will not let you use a variable defined under its usage
console.log("Test", b); // Won’t allow to use the variable in TypeScript
var b = 2;

//NOT COMPILE: Will not let you define the variable that overrides the initial declaration or initialization more than once
var c = 2;
console.log(c); // prints 2
var c = 23;
console.log(c); // prints 23