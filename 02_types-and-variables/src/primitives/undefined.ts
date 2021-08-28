//NOT COMPILE: with the compiler option strictNullChecks, TypeScript not allows having null or undefined
let n2: string = Math.random() > 0.5 ? undefined : "test";

//COMPILE: with the compiler option strictNullChecks, TypeScript allows having null or undefined, as assign manually which of the variables can have both values (a union must be used)
let n3: string | undefined = Math.random() > 0.5 ? undefined : "test";

//NOT COMPILE
console.log(n3.substring(0, 1)); // Won't compile since n3 can be undefined
//COMPILE
if (n3 !== undefined) {
    console.log(n3.substring(0, 1));
}


//optional parameter is automatically set to undefined when not provided
function f1(optional?: string): void {
    if (optional === undefined) {
        console.log(optional); // prints undefined
    } else {
        console.log(optional); // prints some-string
    }
}
f1(); //undefined
f1('some-string'); //some-string


//NOT COMPILE: because undefined is returned if you access an object property that doesn't exist
let obj = { test: 1 };
console.log(obj["notInObject"]); //undefined


//with strictNullChecks activated, the undefined value can only be assigned to a type allowing undefined, a type that is optional, or to a value of type any (a union must be used)
let primitiveWithUndefined: number | undefined = undefined;
console.log(primitiveWithUndefined); // prints undefined

let undefinedPrimitive: undefined = undefined;


//in the case of an optional, a function can use the question mark before the colon that specifies the primitive
function functOptionalArg(primitiveOptional?: number): void {
    console.log(primitiveOptional);
}
functOptionalArg(); //undefined
functOptionalArg(undefined); //undefined
functOptionalArg(1); //1


//undefined can also use the optional notation in a class or an interface
interface InterfaceWithUndefined {
    m1?: number;
}

let i1: InterfaceWithUndefined = {};
let i2: InterfaceWithUndefined = { m1: undefined };
console.log(i1.m1 === undefined); // prints True
console.log(i2.m1 === undefined); // prints True