namespace chapter02.class_declaration_vs_expression {

  // Class declaration
  class RectangleDeclaration {
    area: number;

    constructor(public length: number, public width: number) {
      this.area = this.length * this.width;
    }
  }

  // Class expression
  const RectangleExpression = class {
    area: number;

    constructor(public length: number, public width: number) {
      this.area = this.length * this.width;
    }
  };

}