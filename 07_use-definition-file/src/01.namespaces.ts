//All namespace can be defined more than once in one or many files. 
//It means that you can define code inside many namespace scopes and that TypeScript will see it was all in the same namespace.

//The content of a namespace is shared only if tagged as an exported element:
namespace Merge {
    export interface I1 { m1: string; }
}
namespace Merge {
    export interface I2 { m2: string; }
}

//This can be written in a single namespace:
namespace Merge {
    export interface I1 { m1: string; }
    export interface I2 { m2: string; }
}