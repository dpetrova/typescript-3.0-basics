namespace objectObjectVariable {
	class MyClass {};
	
	// Object type that starts with a capital letter cover a huge set of types
	let bigObject: Object;
	bigObject = 1;
	bigObject = "1";
	bigObject = true;
	bigObject = Symbol("123");
	bigObject = { a: "test" };
	bigObject = () => { };
	bigObject = [1, 2, 3];
	bigObject = new Date();
	bigObject = new MyClass();
	bigObject = Object.create({});

	// object type that is lowercase covers everything that is not a number, a string, a boolean, a null, an undefined, or a Symbol
	//it is a subset of the uppercase Object and contains object literals, dates, functions, arrays, and an instance of an object created with new and create
	let littleObject: object;
	littleObject = { a: "test" };
	littleObject = new Date();
	littleObject = () => { };
	littleObject = [1, 2, 3];
	littleObject = new MyClass();
	littleObject = Object.create({});


	//in the cases of null and undefined, they are neither object nor Object, but a subtype of all other types
	//TypeScript's compiler must be configured with the strict option "strictNullCheck"
	//which meaning that even if null and undefined are a subset of all types, only a union of the main type and null or undefined will allow the assignation
	let acceptNull: number | null = null;
	acceptNull = 1;

	let acceptUndefined: number | undefined = 1;
	acceptUndefined = null; //not compile because is not number neither undefined


	//When to use object, Object, or any:
	//the rule of thumb is to always use the more conscribe type
	//if you do not know the type and need to take an object, you should use an object (lowercase) if you are not allowing a primitive
	//you should fallback to Object (uppercase) if you support a primitive
	// and in the last resort use any	
	let obj1: Object = {};
  	let obj2: object = {};
  	let obj3: {} = {};
  	let obj4: any = {};
	
	obj1.test = "2"; // Does not compile
 	obj2.test = "2"; // Does not compile
  	obj3.test = "2"; // Does not compile
  	obj4.test = "2";
	 
	obj1.toString();
  	obj2.toString();
  	obj3.toString();
	obj4.toString();	
	console.log(obj4); // pronts { test: '2' }

	//however, a better potential approach is, if possible, to use a generic type that allows avoiding doing a type check and casting
}

