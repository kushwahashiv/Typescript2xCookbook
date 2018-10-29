namespace chapter02.destructuring {
	
	// Destructuring arrays
	const foo = ['one', 'two', 'three'];
	
	// Without destructuring
	const one   = foo[0];
	const two   = foo[1];
	const three = foo[2];
	
	// With destructuring
	const [one, two, three] = foo;
	
	// Desttucturing object literals
	const obj = {
		a : 1, 
		b : 2
	};
	
	const {a, b} = obj;
	
	// Destructing and the rest operator
	const [a, b, ...others] = [1, 2, 3, 4, 5];	
	
}