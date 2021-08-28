//TypeScript can have a type specified explicitly or you can have the type determined by TypeScript
//the latter is called an implicit type or a type defined by inference
//implicit type is determined by TypeScript depending on how a variable is initialized during declaration or what is returned for a function return type

namespace inference {
	//an implicit type is only possible when a value is assigned at the declaration
	const x = 1; // type of the variable is number literal of 1; it means that the type is 1 and only 1 and	not any other number
	let y = 1; // type of the variable is number

	//in the case of not specifying a value, only var or let would compile because it allows in a future moment the assignation
	let z;	
	z = 1;
	const d; //NOT COMPILE: because an implicit const must be initialized

	const d1 = new Date();
	let d2 = new Date();
	d1 = ''; //NOT COMPILE: because d1 is const

	const b1 = true;
	let b2 = false;
	b2 = ''; //NOT COMPILE: because b2 is implicit boolean


	//TypeScript can also infer type inside type; m1 is a number by inference
	const c1 = {m1: 1};
	let c2 = {m1: 1};


	//inference works with functions as well
	//parameter must be explicit (in the next example the argument a is implicit any)
	function f1(a) {
		return a;
	}
	console.log(f1(1)); // prints 1

	//return can be implicit; by returning a known type, the return type can be defined
	function f2(a: number) {
		return a;
	}
	console.log(f2('')); // Doesn't compile 

	//in the case of returning several values, TypeScript creates a union of all potential types (here the return type generated is number | string)
	function f3() {
		if (true) {
			return 1;
		} else {
			return "1";
		}
	}	 
	console.log(f3()); // prints 1
}