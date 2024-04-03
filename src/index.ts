/**
 * Multiply 2 numbers
 * @param a - First number
 * @param b - Second number
 * @returns Product of the 2 numbers
	*/

export function multiply(a: number, b: number): number {
	if (b === 0) throw new Error("Cannot divide by zero");
	return a * b;
}
