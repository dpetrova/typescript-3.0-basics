//A class can have its definition enhanced by having an interface of the same name. 
//So, it means that you can have the interface defined with the same name as the concrete class
//It also means that you can provide extension members of the class in the definition, if needed

export interface Album {
    m1: string;
    m2: number;
}

export class Album {
    public m2: number = 12;
}

const a = new Album();
a.m1; // Not implemented but compile.
a.m2;