//NOT COMPILE: with the compiler option strictNullChecks, TypeScript not allows having null or undefined
let string_1: string = Math.random() > 0.5 ? null : "test"; //possible null value

//COMPILE: with the compiler option strictNullChecks, TypeScript allows having null or undefined, as assign manually which of the variables can have both values (a union must be used)
let string_2: string | null = Math.random() > 0.5 ? null : "test";

//NOT COMPILE
console.log(string_2.substring(0, 1)); // Won't compile since string_2 can be null

//COMPILE
if (string_2 !== null) {
    console.log(string_2.substring(0, 1)); // prints t
}

//COMPILE: with strictNullChecks activated, the null value can only be assigned to a type allowing null; to have a type accepting null, a union must be used
let primitiveWithNull: number | null = null;
console.log(primitiveWithNull); // prints null

let nullPrimitive: null = null;