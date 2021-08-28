class ClassWithConstructor {
    constructor() {
        console.log("Object instantiated");
    }
}

//the creation of the class calls the constructor
//console.log will be called during the instantiation of the class into an object
const cwc = new ClassWithConstructor();