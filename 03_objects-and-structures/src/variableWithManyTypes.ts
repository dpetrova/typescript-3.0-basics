namespace manyType {
    //The creation of a type with the keyword type is not required but allows reusability of the type

    //creating a type with many allowed strings
    type MyType = "a" | "b" | "c";
    //a variable declared with the new type will only accept the strings from the list
    const m1: MyType = "a";
    const m2: MyType = "no"; // Doesn’t compile


    //creating a type with more complex unions
    type AcceptedOption = number | string | {
        option1: string, option2: number
    };
    const myOption1: AcceptedOption = "run";
    const myOption2: AcceptedOption = 123;
    const myOption3: AcceptedOption = { option1: "run", option2: 123 };
    console.log(myOption1); // prints run
    console.log(myOption2); // prints 123
    console.log(myOption3); // prints { option1: "run", option2: 123 }


    //a function can take a union type as a parameter and return union type as well
    function functWithUnion(p: boolean | undefined): undefined | null {
        return undefined;
    }
    console.log(functWithUnion(true)); // prints undefined
    console.log(functWithUnion(undefined)); // prints undefined
    
    interface TypeA {
        a: string;
        b: string;
    }
    interface TypeB {
        b: string;
        c: string;
    }

    //when using a union, only the common fields are accessible
    //TypeA has two fields, a and b, and TypeB has b and c, so the only common field is b, 
    //which means that it is the only available and accessible field in the function
    function functionWithUnion(param1: TypeA | TypeB): void {
        console.log(param1.b);
    }

    const typeA: TypeA = { a: "hi", b: "hello" };
    const typeB: TypeB = { b: "world", c: "universe" };
    functionWithUnion(typeA); // prints hello 
    functionWithUnion(typeB); // prints world
}

