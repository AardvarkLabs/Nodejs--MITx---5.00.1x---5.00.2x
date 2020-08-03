function fibonacci() {
	const cache = [1, 1]
	
	yield 1;
	yield 1;
	
	while (true) {
		const nextNum = cache[0] + cache[1];
		
		cache[0] = cache[1];
		cache[1] = nextNum;
		
		yield nextNum;
	}
}

const fibonacciMachine = fibonacci();

console.log(fibonacciMachine.next().value);
// 1
console.log(fibonacciMachine.next().value);
// 1
console.log(fibonacciMachine.next().value);
// 2
console.log(fibonacciMachine.next().value);
// 3
console.log(fibonacciMachine.next().value);
// 5

