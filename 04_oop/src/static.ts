//A static member is a member that can be accessed without instantiating the class
//Everything that is static is shared across all instances for the life of your system
//Static variables and functions are associated with the class, not an instance of the class

namespace staticNamespace {
  //TypeScript does not allow us to have a static class
  //if you want to have all your static members inside a class and prevent instantiating the class
  //you can mark the class as abstract
  //an abstract class cannot be instantiated without being extended
  abstract class FakeStaticClass {
    public static m1: number;
    public static f1(): void { }
  }
  FakeStaticClass.m1 = 2;
  FakeStaticClass.f1();
  const instance1 = new FakeStaticClass(); //NOT COMPILE: cannot create instance of abstract class


  //static members can be from all encapsulation visibilities: public, protected, or private
  //however, only public visibility is accessible from outside the class
  class StaticClass {
    public static ps: number;
    private static privateStatic: number;
    protected static protecStatic: number;

    //to use any static members, the name of the class must be specified before the use of the member
    //you cannot use "this" pointer because it is only available within an instance of a class
    public nonStaticFunction(): void {
      StaticClass.ps;
      StaticClass.privateStatic;
      StaticClass.protecStatic;
    }
  }
}