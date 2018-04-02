namespace chapter02.function_types {
  
  // Function without type annotations
  const saySomething1 = function(something) {
    return `says: ${something}`;
  };
  
  // Function with partial type annotation
  const saySomething2 = function(something: string): string {
    return `says: ${something}`;
  };
  
  // Function with full type annotation
  const saySomething3: (something: string) => string = function(something) {
    return `says: ${something}`;
  };
  
  // Declare full type annotation
  let saySomething4: (something: string) => string; 
  
  // Declare implementation
  saySomething4 = function(something) {
    return `says: ${something}`;
  };
  
}