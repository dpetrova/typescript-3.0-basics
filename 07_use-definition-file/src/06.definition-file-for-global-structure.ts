//To create a definition file for a global structure library, 
//you can use many TypeScript keywords to define a type.

//In the case of a function, you can use function preceded by declare 
//and write the signature of the function as you would do in an interface, without a body:
declare function myGlobalFunction(p1: string): string;
let var1: string = myGlobalFunction("test");


//If you have a type declared at the global scope, you can use an interface. 
//The keyword declare is omitted:
interface myGlobalType {
    name: string;
}
let var2: myGlobalType = { name: "test" };


//A global namespace:
declare namespace myScope {
    let var1: number;
    class MyClass {
    }
    interface MyObject {
        x: number;
    }
    type data = string;
    function myFunction(): any;
}
//The usage of the object, variable, and function always uses the namespace name
//because it is exposed globally by the variable name
let x: number = myScope.var1;
let y: myScope.MyClass = new myScope.MyClass();
let z: myScope.MyObject = { x: 5 };
var something: myScope.data = "test";
myScope.myFunction();
