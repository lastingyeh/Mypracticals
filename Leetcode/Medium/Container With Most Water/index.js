// https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	if (!height.length || height.length === 1) return null;

	let i = 0;
	let j = height.length - 1;

	if (height.length === 2) {
		return Math.min(height[i], height[j]) * (j - i);
	}

	let maxArea = 0;

	while (i < j) {
		let area = Math.min(height[i], height[j]) * (j - i);

		if (area > maxArea) {
			maxArea = area;
		}

		height[i] < height[j] ? i++ : j--;
	}
	return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
