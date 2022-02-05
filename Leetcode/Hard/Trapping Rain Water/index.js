/**
 * test cases
 * [0,1,0,2,1,0,3,1,0,1,2] => 8
 * [] => 0
 * [3] => 0
 * [3,4,3] => 0
 */

// currentWater = min(maxLeft, maxRight) - currentHeight
// total = 0
// maxL = 0
// maxR = 0

// time: O(n^2)
// space: O(1)
/**
 * @param {number[]} heights
 * @return {number}
 */
var getTrappedRainWater = function (heights) {
	let totalWater = 0;

	for (let p = 0; p < heights.length; p++) {
		let leftP = p,
			rightP = p,
			maxLeft = 0,
			maxRight = 0;

		while (leftP >= 0) {
			maxLeft = Math.max(maxLeft, heights[leftP]);
			leftP--;
		}

		while (rightP < heights.length) {
			maxRight = Math.max(maxRight, heights[rightP]);
			rightP++;
		}

		const currentWater = Math.min(maxLeft, maxRight) - heights[p];

		if (currentWater >= 0) {
			totalWater += currentWater;
		}
	}

	return totalWater;
};
