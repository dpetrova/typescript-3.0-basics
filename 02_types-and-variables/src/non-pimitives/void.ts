//void is a special and is used mainly for a function that returns no value
//with an explicit return to void, the function cannot accept a return statement with a value
//COMPILE
function returnNothing(): void {
    return;
}
console.log(returnNothing()); // undefined

//NOT COMPILE
function returnValue(): void {
    return 1;
}


//void variable can only be assigned to undefined
let a: void = undefined; //COMPILE
let b: void = 1 //NOT COMPILE
console.log(a); // prints undefined


//e following function doesn't have a return type and was initially returning nothing
//however, in its life, the function changed and now returns three different values that are not like the previous ones
//the implicit returns value is not void anymore
function returnWithoutType(i: number) {
    if (i === 0) {
        return false;
    } else if (i < 0) {
        return -1;
    } else {
        return "positive";
    }
}
console.log(returnWithoutType(0)); // prints false
console.log(returnWithoutType(-1)); // prints -1
console.log(returnWithoutType(1)); // prints positive