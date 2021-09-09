namespace OptionalGeneric {

    //You can use optional generic params
    function shows1<T>(p1?: T): void {
        console.log(p1);
    }
    shows1(); // p1 is {} | undefined
    shows1("123");
    shows1(123);

    function shows2<T = number>(p1?: T): void {
        console.log(p1);
    }
    shows2(); // p1 is number | undefined


    //Extend two different objects
    interface ObjectWithAge {
        kind: "ObjectWithAge";
        age: number;
    }
    function funct2<T extends ObjectWithAge | ObjectWithAge[]>(p: T): T {
        if (p instanceof Array) {
            return p[0];
        }
        return p;
    }    
} 

