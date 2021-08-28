//The intersect feature is one tool in TypeScript's toolbox that lets you merge types together
//The intersection symbol is the ampersand (&)

interface TypeA {
    a: string;
    b: string;
}

interface TypeB {
    b: string;
    c: string;
}

// creating a third type with the combination of two interfaces; the common fields become one, and the difference adds up
type TypeC = TypeA & TypeB;
const m: TypeC = {
    a: "A",
    b: "B",
    c: "C",
};
console.log(m); // prints { a: 'A', b: 'B', c: 'C' }


//it is possible to intersect generic and primitive as well
function intersectGeneric<TT1>(t1: TT1): TT1 & TypeA {
    const x: TypeA = { a: "a", b: "b" };
    return Object.assign({}, x, t1);
}
const result = intersectGeneric({ c: "c" });
console.log(result); // { a: 'a', b: 'b', c: 'c' }


//the order of the types in the intersection does not matter; two types created here are exactly the same
type TypeD1 = TypeA & TypeB;
type TypeD2 = TypeB & TypeA;

//however, even if they are the same, with the same value, each initialization creates a unique object, meaning that comparing them will be false
let d1: TypeD1 = { a: "a", b: "b", c: "c" };
let d2: TypeD2 = { a: "a", b: "b", c: "c" };
console.log(typeof d1); // prints Object
console.log(typeof d2); // prints Object
console.log(d1 === d2); // prints False
d2 = d1;
console.log(d1 === d2); // prints True


//combining interfaces
interface InterfaceA {
    m1: string;
}

interface InterfaceB {
    m2: string;
}

interface InterfaceMergeAB extends InterfaceA, InterfaceB {
    m3: string;
}

type TypeAB = InterfaceA & InterfaceB;


//combining classes
class ClassA {
    public m1: string = "m1";
}
class ClassB {
    public m2: string = "m1";
}

type ClassAb = ClassA & ClassB;

const classAb: ClassAb = { m1: "test", m2: "test2" };
console.log(classAb); // prints { m1: "test", m2: "test2" }


//intersection and the field m1 being required; if omitted or set to undefined, the code does not compile
interface InterfaceSameField1 {
    m1: string;
}
interface InterfaceSameField2 {
    m1?: string;
}

type Same = InterfaceSameField1 & InterfaceSameField2;
let same: Same = { m1: "This is required" };
console.log(same); // prints { m1: "This is required" }