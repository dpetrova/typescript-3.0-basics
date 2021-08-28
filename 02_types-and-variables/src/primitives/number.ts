//NOT COMPILE: number cannot directly use a boolean value
let boolean: number = true;

//COMPILE: conversation by parsing the boolean is required (there are many ways to convert a Boolean to a number)
//use the Number constructor that takes any value and converts it into a number of 1 for true and 0 for false
let boolean1: number = Number(true);
console.log(boolean1); // prints 1
let boolean2: number = Number(false);
console.log(boolean2); // prints 0
//use the ternary operator and manually select the desired value, which can be beyond 1 and 0
let boolean3: number = true ? 1 : 0;
console.log(boolean3); // prints 1
let boolean4: number = false ? 1 : 0;
console.log(boolean4); // prints 0
//use the + sign to start an addition to the value, which automatically converts the boolean value to a number
let boolean5: number = +true;
console.log(boolean5); // prints 1
let boolean6: number = +false;
console.log(boolean6); // prints 0


//NOT COMPILE: number cannot directly use a string value
let str: number = "12.45";

//COMPILE: conversation by parsing the string is required (there are many ways to convert a string to a number)
//using the Number constructor
let str1: number = Number("123.5");
console.log(str1); // prints 123.5
let str2: number = Number("-123.5");
console.log(str2); // prints -123.5
//using the parseInt function; it has a second optional parameter that allows specifying the base (this should always be specified to avoid error with octal or hexadecimal)
let str3: number = parseInt("123.5", 10);
console.log(str3); // prints 123
let str4: number = parseInt("-123.5", 10);
console.log(str4); // prints -123
//use the + sign to add to the value, which automatically converts the string value to a number
let str5: number = +"123.5";
console.log(str5); // prints 123.5
let str6: number = +"-123.5";
console.log(str6); // prints -123.5


//a numeric separator allows writing a number in a human way by dividing the digit by an underscore (parsing a string with a numeric separator will fail)
let numeric_separator: number = 9_000_100;
console.log(numeric_separator); // prints 9000100


//a number can be written in a different base
// 0x for hexadecimal
let number1: number = 0x10;
console.log(number1); // prints 16
// 0b for binary
let number2: number = 0b10;
console.log(number2); // prints 2
// 0o for octal
let number3: number = 0o10;
console.log(number3); // prints 8


//no need to specify const/let/var in function arguments
function noNeed_const_let_var(parameter1: number) { }