//Since the early versions of ECMAScript, functions were the main concept to execute code and create scope.
//TypeScript uses the function the same way but provides additional typing features

//a function has a main signature that contains the name of this one, the list of parameters, and the return type

//parameters are defined in parentheses, as in JavaScript, but each parameter will be followed by its type using the colon syntax
function funct1(param1: number): string { return ""; }

//can have several parameters of a different type
function funct2(param1: boolean, param2: string): void { }

//can also have a parameter that has more than one type using a union
function funct3(param1: boolean | string): void { }

//a function has a single return declaration but that type can use a union to allow types
function funct4(): string | number | boolean { return ""; }


//function statement (use function syntax)
function funcStatement(message: string): string { return message + " world" }

//function expression (a function in a variable)
const funcExpression = (message: string) => { return message + " world" }


//Having several function signatures for the same body is the concept of an overloaded function
//when using an overloaded function, all signatures must be written from top to bottom from the most specific to the largest one
//all the definition requires finishing with a semicolon expect the last one
//the last signature always has a union that covers all possible types for each position
function funct5(param1: boolean): string;
function funct5(param1: Date): number;
function funct5(param1: boolean | Date): string | number {
  if (typeof param1 === "boolean") {
    return param1 ? "Yes" : "No";
  } else {
    return 0;
  }
}

const expectedString: string = funct5(true);
const expectedNumber: number = funct5(new Date());
console.log(expectedString); // prints Yes
console.log(expectedNumber); // prints 0


//returning an anonymous function in fat arrow format
function returnAnAnonymousFunction(): () => number {
  return () => 1;
}
//returning an anonymous function as a Function constructor
function returnAnAnonymousFunction2(): Function {
  return function () { return 1 };
}
console.log(returnAnAnonymousFunction());
console.log(returnAnAnonymousFunction2());


//a variable function
//if the code returns directly without doing any several statements, the need for curly brackets and return statement is not needed
const variable = (message: string) => message + " world";
const variable2 = (message: string) => { return message + " world" };
const variable3 = function (message: string) { return message + " world" };
console.log(variable("Hello")); // prints Hello world
console.log(variable2("Hello")); // prints Hello world
console.log(variable3("Hello")); // prints Hello world


//a function can have an optional parameter and a default value parameter
//an optional parameter is denoted by the use of question mark after the name of the parameter
//an optional parameter allows avoiding passing a value; TypeScript automatically sets the parameter to undefined
function functWithOptional(param1?: boolean): void { }
console.log(functWithOptional()); // prints undefined, as the function return void
console.log(functWithOptional(undefined)); // prints undefined, as the function return void 
console.log(functWithOptional(true)); // prints undefined, as the function return void

//optional is different than having the variable with a union to undefined because the union requires passing the value or undefined 
//while optional allows passing the value, undefined or nothing
function functWithUndefined(param1: boolean | undefined): void { }
console.log(functWithUndefined(true)); // prints undefined as function returns void
console.log(functWithUndefined(undefined)); // prints undefined, as the function return void

//optional can only be set after non-optional (required) parameter
function functWithOptional2(param1?: boolean, param2: string): void { } // Doesn't compile
function functWithOptional3(param2: string, param1?: boolean): void { } // Compile
function functWithOptional4(param1?: boolean, param2?: string): void { } // many optional parameters


//a function can be in a class, as the syntax is different
//it doesn't use the keyword function, instead, the visibility is provided, which is public, private, or protected
//TypeScript allows avoiding access modifiers, which will result in a public function
class ClassFullOfFunctions {
  public f1() { }
  private f2(p1: number): string { return ""; }
  protected f3(): void { }
  f4(): boolean { return true; }
}

const object = new ClassFullOfFunctions();
console.log(object.f1()); // prints undefined
console.log(object.f2(1)); // Doesn't compile because function in the class is private.  
console.log(object.f3()); // Doesn't compile because function in the class is protected.  
console.log(object.f4()); // prints true


//it is also possible to create a variable that holds the function inside a class
class ClassWithVariableFunctions {
  //very explicit
  private long: (p1: number) => string = (p1: number) => { return ""; }
  //doesn't define the type at the function level because it is already defined in the declaration
  private short: (p1: number) => string = (p1) => "";
  //doesn't define the type of the variable and the variable is still strongly typed because it infers its signature from the initialization
  private tiny = (p1: number) => "";
}




