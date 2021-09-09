namespace compareClasses {

  //two different classes can be interchangeable if they have the same structure
  class C1 {
    public a: number = 1;
    public funct(): void { }    
  }
  class C2 {
    public a: number = 1;
    public funct(): void { }    
  }
  const c1: C1 = new C1();
  const c2: C2 = new C2();
  const c12: C1 = new C2();  

  //If we add in the private field, then it won't be the same
  //The private and protected fields make each class unique
  class D1 {
    public a: number = 1;
    public funct(): void { }
    private p: string = "p";
  }
  class D2 {
    public a: number = 1;
    public funct(): void { }
    private p: string = "p";
  }
  const d1: D1 = new D1();
  const d2: D2 = new D2();
  const d12: D1 = new D2(); // Does not compile
  function executeClass1(d1: D1): void {
    d1.funct();
  }
  executeClass1(d1);
  executeClass1(d2); // Does not compile
  executeClass1(d12);

  
  //without a private or a protected field the base class can be substituted by a single class 
  //that has the structure of the child and the base
  class B1 {    
    public baseFunct(): void { }
  }
  class B2 extends B1 {
    public a: number = 1;
    public funct(): void { }
  }
  class B3 {    
    public a: number = 1;
    public funct(): void { }
    public baseFunct(): void { }
  }
  const b2: B1 = new B2();
  const b3: B1 = new B3();

  //adding a private field at the base class E1 and the same in E3 makes them different, 
  //which stops E3 being addressable to the variable E3 of type E1
  class E1 {
    private name: string = "e1";
    public baseFunct(): void { }
  }
  class E2 extends E1 {
    public a: number = 1;
    public funct(): void { }
  }
  class E3 {
    private name: string = "e3";
    public a: number = 1;
    public funct(): void { }
    public baseFunct(): void { }
  }
  const e2: E1 = new E2();
  const e3: E1 = new E3(); // Does not compile 
}