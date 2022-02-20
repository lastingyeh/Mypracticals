/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	const flatterArr = matrix.flat(1);

	let left = 0,
		right = flatterArr.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (target === flatterArr[mid]) return true;

		if (target > flatterArr[mid]) {
			left = mid + 1;
		} else if (target < flatterArr[mid]) {
			right = mid - 1;
		}
	}
	return false;
};

const matrix = [
	[1, 3, 5, 7],
	[10, 11, 16, 20],
	[23, 30, 34, 60],
];

console.log(searchMatrix(matrix, 3));
