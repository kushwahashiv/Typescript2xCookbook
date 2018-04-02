namespace chapter02.string_literal_types {
  
  // String literal (Note: TypeScript >= 1.8 is required)
  type ok = 'ok';
  
  // Some valid usages string literal usages
  const a: ok = 'ok';
  const b: 'ok' = a;
  const c: string = a;
  
  // String enumerations powered by string literals (Note: TypeScript >= 1.8 is required)
  type result = 'ok' | 'fail' | 'abort';
  
  // Valid usage
  function compute(n: number): result {
    if(n === 1) {
      return 'ok';
    } else if (n === 2) {
      return 'fail';
    } else {
      return 'abort';
    }
  }
  
}