//type and interface are not exactly the same
//you can merge two interfaces together, but you cannot merge an interface with a primitive, which can be done with a type
//тhe rule of thumb is to rely on an interface as much as possible
//because of the open-ended feature, the reduction of confusion regarding whether the type can have primitive, and because they can be extended or intersected

//open-ended: possibility to enhance an interface
interface IA {
    m1: string;
}
interface IA {
    m2: string;
}
const ia: IA = { m1: "m1", m2: "m2" };
console.log(ia); // prints { m1: "m1", m2: "m2" }


//class can extend a type or an interface; the latter is often more seen because type carries some caveat
type TPrimitive1 = string;
type TPrimitive2 = { m1: string };

//implementation will not work for a type that contains a primitive
class ExtendPrimitiv1 implements TPrimitive1 { // Does not compile
}

class ExtendPrimitiv2 implements TPrimitive2 { // Compile
    public m1: string = "Compile";
}


//type and interface can have an index signature
type TypeWithIndex = {
    [key: string]: string;
    m1: string;
}
const c: TypeWithIndex = {
    m1: "m1"
};
c["m2"] = "m2";

console.log(c); // prints { m1: 'm1', m2: 'm2' }