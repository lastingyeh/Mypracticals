/**
 * @param {number[]} heights
 * @return {number}
 */
// currentWater = min(maxLeft, maxRight) - currentHeight
var getTrappedRainWater = function (heights) {
	// 1. identity pointer with lesser value
	// 2. is this pointer value less than or equal to max on that side
	// yes => update max out that side
	// no => get water for pointer value, add to total
	// 3. move pointer inward
	// 4. repeat for the pointer

	let left = 0,
		right = heights.length - 1,
		maxLeft = 0,
		maxRight = 0,
		total = 0;

	while (left < right) {
		if (heights[left] <= heights[right]) {
			if (heights[left] >= maxLeft) {
				maxLeft = heights[left];
			} else {
				total += maxLeft - heights[left];
			}
			left++;
		} else {
			if (heights[right] >= maxRight) {
				maxRight = heights[right];
			} else {
				total += maxRight - heights[right];
			}
			right--;
		}
	}
	return total;
};
