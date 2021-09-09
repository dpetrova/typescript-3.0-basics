namespace union {
  //NOT WORK
  function f1(p: number | string): boolean | Date {
    if (typeof p === "number") {
      return true;
    }
    return new Date();
  }
  const a1: boolean = f1(1); // Does not compile
  const a2: Date = f1("string"); // Does not compile

  //WORK
  function f2(p: number): boolean;
  function f2(p: string): Date;
  function f2(p: number | string): boolean | Date {
    if (typeof p === "number") {
      return true;
    }
    return new Date();
  }
  const b1: boolean = f2(1);
  const b2: Date = f2("string");
  console.log(b1); // prints true
  console.log(b2); // prints 2018-08-25T07:39:38.142Z


  function f3(p: number, q: number): boolean;
  function f3(p: string, q: string): Date;
  function f3(p: number | string, q: number | string): void { }
  f3(1, 2);
  f3("1", "2");
  f3(1, "123"); // Doesn't compile  
}