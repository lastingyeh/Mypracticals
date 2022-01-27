/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let sum = 0;
	// first > second -> desc
	for (let i = 0; i < digits.length; i++) {
        if(digits[i] === 0){
            digits[i] === 1
        }
        val =  digits[i] * Math.pow(10, digits.length - i - 1);
        // console.log(val);
		sum += digits[i] * Math.pow(10, digits.length - i - 1);
	}

	console.log(sum);

	digits = [];

	for (let c of sum.toString()) {
		digits.push(+c);
	}

	return digits;
};

// console.log(plusOne([9, 9]));
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([8, 9, 9, 9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
