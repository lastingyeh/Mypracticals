/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	var results = [];

	for (var i = 0; i < nums.length; i++) {
		var diff = target - nums[i];
		var idx = nums.indexOf(diff);

		if (idx !== -1 && idx !== i) {
			results.push(i);
			results.push(idx);
			break;
		}
	}

	return results;
};
