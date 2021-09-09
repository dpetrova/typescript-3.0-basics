//TypeScript brings type in JavaScript, but this is mostly true at design type
//TypeScript during compilation removes all the type
//However, we can use all JavaScript's tricks to know whether a value is from a different type

namespace primitiveTypeOf {

	//typeof operator returns the type of a primitive, or it returns object
	const a = "test";
	let b: number = 2;
	const c: boolean = true;
	let d: number | string = "test";
	const e: number | string | { complex: string, obj: number } = { complex: "c", obj: 1 };
	console.log(typeof a); // string
	console.log(typeof b); // number
	console.log(typeof c); // boolean
	console.log(typeof d); // string	
	console.log(typeof e); // object

	//can be used to set a type
	let f: number = 2;
	if (typeof f === "number") {
		console.log("This is for sure a number");
	}
	type MyNewType = typeof f;

	//typeof behaves strangely with undefined or null
	//however, undefined will return undefined and null will return object
	//the best approach to check for undefined or null is to not use typeof
	let g: number | undefined = undefined;
	let h: number | undefined | null = null;
	console.log(typeof g); // undefined
	console.log(typeof h); // object
	console.log(g === undefined); // true
	console.log(g === null); // false
	console.log(h === undefined); // false
	console.log(h === null); // true

	//TypeScript uses a control flow to find out in a smart way the type
	function myFunction(value: number | undefined): void {
		console.log("Value is number or undefined");
		if (value === undefined) {
			console.log("Value is undefined");
		} else {
			console.log("Value is NOT undefined, hence a number");
		}
		console.log("Value is number or undefined");
	}
	myFunction(1);
	myFunction(undefined);

	function myFunction2(value: number | undefined): void {
		console.log("Value is number or undefined");
		if (value === undefined) {
			return;
		}
		console.log("Value is NOT undefined, hence a number");
	}
	myFunction2(1);
	myFunction2(undefined);
}