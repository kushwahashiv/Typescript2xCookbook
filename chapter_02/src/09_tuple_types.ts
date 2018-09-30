namespace chapter02.tuple_type {
	
	// Tuple type
	let t: [number, string] = [1, 'hello'];
	
	// Valid usages of tuple type
	t = [2, 'test'];
	const t0 = t[0];  // Type number
	const t1 = t[1];  // Type string
	
	// Invalid usages of tuple type
	// t = [];                // Error
	// t = [1];               // Error
	// t = ['test', 2];       // Error
	// t = [2, 'test', true]; // Error
}