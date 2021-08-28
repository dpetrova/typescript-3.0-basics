namespace indexSignature {
	// index signature with Map (Dictionary)
	interface Person {
		[id: string]: string;
	}

	//COMPILE: if the index is defined to accept a string as the key, you will be able to pass a string and a number as well
	const c: Person = {
		"test": "compile",
		123: "compile too"
	};
	console.log(c[123]); // compile too

	interface NotAPerson {
		[id: number]: string;
	}

	//NOT COMPILE: a key with a number type does not accept a string
	const c2: NotAPerson = {
		"test": "not compile",
		123: "compile too"
	};



	// index signature with Objects
	interface NotIndexSignatureObject {
		name: string;
		count: number;
	}

	const obj: NotIndexSignatureObject = {
		name: "My Name",
		count: 123
	};

	//TypeScript won't let you read or add a member if the index signature is not provided in your definition
	console.log(obj["doesNotExist"]); // Does not compile
	console.log(obj["name"]); // Compile


	//problem with index signature is when it is combined with an object that has other members
	// NOT COMPILE: key of the index signature of type string
	interface ObjWithMembersAndIndexSignature1 {
		name: string;
		count: number;
		when: Date;
		[id: string]: string;
	}
	// COMPILE: key of the index signature of type number
	interface ObjWithMembersAndIndexSignature {
		name: string;
		count: number;
		when: Date;
		[id: number]: string;
	}

	// NOT COMPILE: containing an additional object is not allowed when an index signature is defined
	interface ObjWithMembersAndIndexSignature2 {
		name: string;
		count: number;
		when: Date;
		obj: { s: string }; // DOES NOT COMPILE
		[id: number]: string;
	}

	//NOT COMPILE: adding a string key to an object with an index signature that has a key to a number
	const obj2: ObjWithMembersAndIndexSignature = {
		name: "My Name",
		count: 123,
		when: new Date(),
		"more": "nooo" // DOES NOT COMPILE
	};

	// COMPILE: can transform the object definition by providing a member of a type number with a value of a string
	const obj3: ObjWithMembersAndIndexSignature = {
		name: "My Name",
		count: 123,
		when: new Date(),
		12: "string only" // Good if number->string
	};
	console.log(obj3[12]); // prints stirng only


	//if you want to have a string as a key you will need to change the type allowed as a value in your index signature to have a union of every member
	interface ObjWithMembersAndIndexSignature2 {
		name: string;
		count: number;
		when: Date;
		[id: string]: string | number | Date;
	}


	//having an interface that has only the index signature can be used as a property of an object and have all the quick access
	interface MyMap<T> {
		[index: string]: T;
	}
	interface YourBusinessLogicObject {
		oneProps: string;
		secondProps: number;
		thirdProps: Date;
		yourDictionary: MyMap<string>;
	}	
}