namespace TypeAssertion {
	interface T1 {
		myNumber: number | undefined;
	}
	interface T2 {
		t1: T1 | undefined;
	}
	interface T3 {
		t2: T2 | undefined;
	}
	const myObject: T3 | undefined = {
		t2: {
			t1: {
				myNumber: 1
			}
		}
	}

	//with a deep-nesting object, you may have several levels of nullable fields, and 
	//if you are sure that they are not undefined or null, you should make nested conditional checks:	
	if (myObject !== undefined) {
		if (myObject.t2 !== undefined) {
			if (myObject.t2.t1 !== undefined) {
				if (myObject.t2.t1.myNumber !== undefined) {
					console.log("My number is :", myObject.t2.t1.myNumber); // prints My number is : 1
				}
			}
		}
	}

	//this will be great to avoid having a nested if structure:
	//assertion type is the bang operator, or exclamation point, 
	//after a member that specifies that the member is not null or undefined
	console.log("My number is :", myObject!.t2!.t1!.myNumber); // prints My number is : 1


	//If TypeScript is set to avoid an uninitialized field, then you will have an error 
	//when defining a field and not specifying a value at the declaration or in the constructor.
	//This is a great validation, but, in some cases, the value may come later in an initialize function. 
	//In that case, you can assert the class's field to say that you are taking care of the value
	class LateInitialization {
		m1!: number; // Not initialized (use type assertion)
		constructor() {
			// No initializing here			
		}
		public init(): void {
			this.m1 = 1;
		}
	}


	//The following code declares a variable of type string or undefined. 
	//It sets its value using a function that isimmediately invoked. 
	//The function has a return type of also string | undefined.
	//We know that the result won't be undefined, and hence can use the exclamation point 
	//to remove the undefined possibility and use the string's functions
	let var1: string | undefined;
	var1 = ((): string | undefined => "Not undefined but type is still both")();
	console.log(var1!.substr(0, 5)); // prints Not u
}