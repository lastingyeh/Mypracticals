/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	nums.sort((a, b) => a - b);

	let x = 0;
	let bestSum = null;
	let bestDiff = null;
	let done = false;

	while (x < nums.length - 2 && !done) {
		// it's useless to check for new combinations if the previous value is the same as the current value
		// ex: [2, 2, 3, 4] -> when x is 1, we will just be repeating what we did when x was 0 so it's better to just skip it
		while (x && nums[x] === nums[x - 1]) {
			x++;
		}

		let y = x + 1;
		let z = nums.length - 1;

		while (y < z) {
			const sum = nums[x] + nums[y] + nums[z];

			if (sum === target) {
				done = String(sum);
				bestSum = sum;

				break;
			}

			if (bestDiff === null) {
				bestDiff = Math.abs(target - sum);
			}

			if (bestSum === null) {
				bestSum = sum;
			}

			const currentDiff = Math.abs(target - sum);

			if (bestDiff > currentDiff) {
				bestDiff = Math.min(bestDiff, currentDiff);
				bestSum = sum;
			}

			// the following is explained in the third from the last bullet in the logic explanation above
			// the whiles are just so we can skip redoing the same computation that we've already done
			// ex: [2, 3, 3, 4]
			// x: 2, y: 3, z: 4
			// if we want to raise the sum, then we'd move y to the right but y is still 3 so we'd
			// just be getting the same sum if we do so. It's better to skip it
			if (sum < target) {
				y++;
				while (nums[y] === nums[y - 1]) {
					y++;
				}
			}

			if (sum > target) {
				z--;
				while (nums[z] === nums[z + 1]) {
					z--;
				}
			}
		}
		x++;
	}
	return bestSum;
};

// https://leetcode.com/problems/3sum-closest/
