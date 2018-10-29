namespace chapter02.abstract_classes {

  abstract class Base {
    foo(): number {
      return this.bar();
    }

    abstract bar(): number;
  }

  // Invalid usages
  // const b = new Base;

  class Derived extends Base {
    bar(): number {
      return 3;
    }
  }

  const derived = new Derived(); // OK
  derived.bar(); // 3
  derived.foo(); // 3	
	
}