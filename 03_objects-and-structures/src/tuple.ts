//tuple is an alternative to an object to hold multiple values within a single variable
//tuple is a convenient way to pass information in a function and also to quickly return more than one value
//however, a better alternative is to define a quick interface with the member desired; 
//not only does it not rely on position, but it can be reused in many situations easily by allowing extension and intersection

namespace Tuple {

    //assignation with a tuple is done by setting the desired value in a specific index of an array
    let tuple1 = ["First name", "Last Name", 1980]; // Infered as (string |number)[]    
    tuple1[2] = "Not a number";

    //specify the type for each position
    let tuple2: [string, string, number] = ["First name", "Last Name", 1980]; // Tuple
    tuple2[2] = "Not a number"; // Does not compile

    //during instantiation, there is a validation of type as well as a validation of size
    let tuple3: [string, string, number]
    tuple3 = ["Only One"]; // Does not compile, size must be of 3 elements
    tuple3 = ["One", "Two", 3, "four"]; // Does not compile, size must be of 3 elements
    tuple3[1]= 2; // Does not compile, require to be a string
    tuple3[5] = "12"; // Compile (shows the nature of the array: regardless of the fact that the tuple declaration specifies three positions, it is possible to add any type at any position)
    tuple3[5] = "12"; // Compile, do not mind the type
    

    //tuple supports spread operator to deconstruct a function parameter into several variables, so it is possible to pass a tuple but not an array
    function restFunction(...args: [number, string, boolean]): void {
        const p1: number = args[0];
        const p2: string = args[1];
        const p3: boolean = args[2];
        // Code
    }
    function resultFunction(p1: number, p2: string, p3: boolean): void {
        // Code
    }

    let tuple4: [number, string, boolean] = [0, "one", false];
    let array4: (number | string | boolean)[] = [0, "one", false];

    restFunction(...tuple4);
    restFunction(...array4); // Doesn't compile
    restFunction(tuple4[0], tuple4[1], tuple4[2]);
    restFunction(array4[0],array4[1],array4[2]); // Does not compile


    //tuple supports optional; positions without value are automatically set to undefined
    let tuple5: [number, string?, boolean?];
    tuple5 = [1];
    tuple5 = [1, "two"];
    tuple5 = [1, "two", false];
    console.log(tuple5); // prints [1, "two", false] 

    //optional position can be set to undefined as well
    let tuple6: [number, (string | undefined)?, (boolean | undefined)?]


    //setting the tuple definition in a type can be advantageous when a tuple is reused in several places
    type MyTuple = [number, string];
    let tuple7: MyTuple = [1, "Test"];
    console.log(tuple7); // prints [1, "Test"]
}