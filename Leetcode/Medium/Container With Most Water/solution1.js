// [7,1,2,3,9]
// formula
// result = min(a,b) * (bi - ai) => min(7,1) * (1 - 0) = 1
// maxArea = 0 => max(maxArea, result)

/**
 * @param {number[]} height
 * @return {number}
 */
// time: O(n^2)
// space: O(1)
var maxArea = function (height) {
	if (!height || height.length === 0 || height.length === 1) {
		return 0;
	}

	let result = 0;

	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			const minHeight = Math.min(height[i], height[j]);
			const width = j - i;
			const area = minHeight * width;

			result = Math.max(area, result);
		}
	}

	return result;
};

console.log(maxArea([7, 1, 2, 3, 9]));
