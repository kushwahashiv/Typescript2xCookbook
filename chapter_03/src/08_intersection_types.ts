/* tslint:disable */

namespace chapter02.intersection_types {

  interface A {
    a: string;
  }
  interface B {
    b: string;
  }
  interface C {
    c: string;
  }

  let abc: A & B & C;
  abc.a = 'hello';
  abc.b = 'hello';
  abc.c = 'hello';

  interface X {
    x: A;
  }
  interface Y {
    x: B;
  }
  interface Z {
    x: C;
  }

  let xyz: X & Y & Z;
  xyz.x.a = 'hello';
  xyz.x.b = 'hello';
  xyz.x.c = 'hello';

}