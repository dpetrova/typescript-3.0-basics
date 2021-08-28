//never is a variable that should never be set

//function rarely returns never, but it can happen
//this is the case if you are having a function that does not allow you to finish the method to execute or return any variable
function returnNever(i: number): never {

    // Logic here

    if (i === 0) {
        throw Error("i is zero");
    } else {
        throw Error("i is not zero");
    }

    // Will never reach the end of the function

}
console.log(returnNever(5));


//this can happen if you have several conditions and that one englobe another making some variable fall into the never scenario
type myUnion = "a" | "b";
function elseNever(value: myUnion) {
    if (value === "a") {
        value; // type is “a”
    } else if (value === "b") {
        value; // type is “b”
    } else {
        value; // type is never
    }
}


//in practice, the never type is used for checking whether all values of an enum or a union have conditions that took care of all the values
//this allows creating a validation when a developer adds a value to the enum or the union but forgets to add a condition
let union: myUnion = Math.random() > 0.5 ? "a" : "b";

if (union == "a") {
    console.log("Union a");
} else {
    exhaustiveCheck(union); //”b” will fallthrough
}

function exhaustiveCheck(x: never): never {
    throw new Error("");
}