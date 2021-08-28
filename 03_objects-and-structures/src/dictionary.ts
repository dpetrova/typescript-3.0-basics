//In JavaScript, using the dynamic notion of being able to assign a member to an object creates a dictionary
//Each object's property becomes a key of the dictionary
//TypeScript allows you to specify the type of the key (between number and string) and any type of values

namespace dictionaryVariables {

    interface Person {
        [id: string]: string; //key -> string; value -> string
    }

    //writing into the dictionary is as simple as using the square bracket and assigning the value
    const p: Person = {};
    p["id-1"] = "Name1";
    p["string-2"] = "Name12";

    console.log(p["string-2"]); // Name12

    interface NotAPerson {
		[id: number]: string;
	}

    //COMPILE: if the index is defined to accept a string as the key, you will be able to pass a string and a number as well
    const c: Person = {
		"test": "compile",
		123: "compile too"
	};

    //NOT COMPILE: but a key with a number type does not accept a string
    const c2: NotAPerson = {
		"test": "not compile",
		123: "compile"
	};
}