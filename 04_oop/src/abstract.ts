//abstraction is an object-oriented concept that allows us to have a base class
//that delegates the implementation of a function to the class that extends the abstract class

namespace abstractPattern {

  //the following example creates the main class by instantiating the custom logic class;
  //it invokes the main function, which will execute the abstract function;
  //it executes the commented block code in that particular order A-C-B 
  abstract class MainClass {
    public mainCoreLogic(): void {
      // Code here [A]
      this.delegatedLogic();
      // Code here [B]
    }
    public abstract delegatedLogic(): void;
  }

  class CustomLogic extends MainClass {
    public delegatedLogic(): void {
      // Do some custom logic here [C]
    }
  }

  const c: MainClass = new CustomLogic();
  c.mainCoreLogic();


  //the main class Calculus has a public function that takes two numbers and returns a Boolean
  //it does some operations on the parameters and calls the delegated logic;
  //the treatment of the value is unknown to the main class
  abstract class Calculus {
    public isAboveZero(a: number, b: number): boolean {      
      const result = this.delegatedLogic(a, b);
      return result > 0;
    }
    public abstract delegatedLogic(a: number, b: number): number;
  }

  class MultiplicationLogic extends Calculus {
    //every abstract member becomes a public field at the extended level
    public delegatedLogic(a: number, b: number): number {
      return a * b;
    }
  }

  //initialize with the base class
  const multi: Calculus = new MultiplicationLogic(); //expose only the main function
  const boolean = multi.isAboveZero(1, 2); // true
  
  //initialize with the child class
  const multi2: MultiplicationLogic = new MultiplicationLogic(); //expose also the delegate function
  const boolean2 = multi2.isAboveZero(1,2) // true
  const multiplicationResult = multi2.delegatedLogic(2,3) // 6

  
  //the same example in non-object-oriented way by providing by parameter the logic to execute
  class CalculusWithoutAbstract {
    public constructor(private delegatedLogic: (a: number, b: number) => number) { }

    public isAboveZero(a: number, b: number): boolean {      
      const result = this.delegatedLogic(a, b);
      return result > 0;
    }
  }

  const multi3: CalculusWithoutAbstract = new CalculusWithoutAbstract((a, b) => a * b);
  const boolean3 = multi3.isAboveZero(1, 2); // true  
}