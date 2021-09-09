//Casting is the act of taking one type and transposing it onto something else.
//It is dangerous because may be creating an incompatible and unexpected result

namespace Cast {
  //the most basic cast scenario is getting a value that is from any and to type it
  //cast only works if you are working with a subtype
  //any is a subtype of everything, which allows casting to every type
  let something: any = 1;
  let variable1: number;
  //two different ways to cast:
  variable1 = <number>something;
  variable1 = something as number;
  
  //casting a number to a string does not work
  let variable2: string = variable1 as string;

  //cannot casting between objects that miss fields
  interface Type1 {
    m1: number;
  }
  interface Type2 {
    m2: string;
    m3: number;
  }
  let t1: Type1 = { m1: 123 };
  let t2: Type2 = t1 as Type2; // Property 'm2' is missing in type 'Type1'
  let t3: Type2 = { m2: "2", m3: 3 };
  let t4: Type1 = t2 as Type1;// Property 'm1' is missing in type 'Type2'
      
  //however, adding m1 to both objects changes the whole situation and allows casting in both sides
  //the reason is that Type3 is a subtype of Type4 by its structure
  interface Type3 {
    m1: number;
  }
  interface Type4 {
    m1: number;
    m2: string;
    m3: number;
  }
  let t5: Type3 = { m1: 123 };
  let t6: Type4 = t5 as Type4; //casting is required because t5 doesn't fulfil the contract (it misses m2 and m3)
  let t7: Type4 = { m1: 1, m2: "2", m3: 3 };
  let t8: Type3 = t6 as Type3; // this cast is useless (Type3 is a subtype of Type4)
  let t9: Type3 = t6
  console.log(t5); // prints { m1: 123 }
  console.log(t6); // prints { m1: 123 }
  console.log(t7); // prints { m1: 1, m2: '2', m3: 3 }
  console.log(t8); // prints { m1: 123 }
  console.log(t9); // prints { m1: 123 }

  //a bad pattern is to cast to any and then to the desired type
  let a: number = 1;
  let b: string = "2";
  a = b as number; // Doesn't compile
  a = b as any as number; // Compile
  console.log(a); // prints 2
}