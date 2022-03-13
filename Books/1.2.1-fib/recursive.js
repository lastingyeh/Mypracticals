// up to down
/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
	// n = 0 => 0
	if (n === 0) return 0;
	// n = 1,2 => 1
	if (n === 1 || n === 2) return 1;

	const memo = new Array(n + 1).fill(0);

	return helper(memo, n);
};

/**
 * @param {number[]} memo
 * @param {number} n
 * @return {number}
 */
const helper = (memo, n, k) => {
	console.log({ memo, n, k });

	// base case
	if (n === 1 || n === 2) return 1;

	if (memo[n] !== 0) return memo[n];

	memo[n] = helper(memo, n - 1, 'a') + helper(memo, n - 2, 'b');

	return memo[n];
};

/**
 * f(20) = [L1] f(19) + f(18), f(19) = [L2] f(18) + f(17)...; f(18) = f(17) + f(16)...
 */



// console.log(fib(0));
// console.log(fib(1));
// 1,1,2,3,5
console.log(fib(5));
