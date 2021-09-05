namespace classVariables {

    //a known pattern is to have a Singleton class, where only a single instance of the class exists
    //this can be controled by having a single function that uses "new" once
    //and then always returns the same instance
    class SingletonClass {
        private static instance: SingletonClass;

        private constructor() {
          SingletonClass.instance = new SingletonClass();
        }

        public static GetInstance(): SingletonClass {
          return SingletonClass.instance;
        }
      }
      
      const singletonClass = SingletonClass.GetInstance();

}