let bool1: boolean = true; // true
let bool2: boolean = false; // false
let bool3: boolean = 1 === 1; // true

//NOT WORK: using Boolean constructor barely any work for the case of a string with the value false
let bool4: boolean = Boolean("true"); // true
let bool5: boolean = Boolean("TRUE"); // true
let bool6: boolean = Boolean("false"); // true
let bool7: boolean = Boolean("FALSE"); // true
let bool8: boolean = Boolean(NaN); // false
let bool9: boolean = new Boolean("true").valueOf(); // true
let bool10: boolean = new Boolean("false").valueOf(); // true

//WORK: a TypeScript specific solution where we cast the string to type and then back to a boolean
let bool11: boolean = "true" as any as boolean; // true
let bool12: boolean = "false" as any as boolean; // false

//WORK: using comparing function
function isTrue(s: string): boolean {
    return s.toLocaleLowerCase() === "true";
}
let bool13 = isTrue("true"); // true
let bool14 = isTrue("false"); // false
