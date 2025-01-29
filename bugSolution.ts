function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Parameters must be numbers.');
  }
  return a + b;
}

const result = add(1, 2); // Works correctly
console.log(result);

try {
  const result2 = add("hello", 2); // Throws an error now
  console.log(result2);
} catch (error) {
  console.error(error);
} 