/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	// 1,1,2,3,5,8
	let f1 = 1;
	let sum = 0;
    let tmp = 0;

	let i = 0;

	while (i < n) {
        sum = tmp + f1; // 1 + 2 = 3
        
        tmp = f1; // tmp = 2
        f1 = sum; // 3

		i++;
	}

	return sum;
};

console.log(climbStairs(5));
