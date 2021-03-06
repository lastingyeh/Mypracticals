// step 1 set {pivot} index (last point)
// step 2 divid into two sections between {pivot} -> less (left) and great (right)
// step 3 set i (target index), j (loop compare)
// step 4 check j's value as if less than pivotal that swap(j,i) and i++
// step 5 swap(i, j) util j === pivot
// cycle above steps

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const getPartition = function (nums, left, right) {
	const pivotElement = nums[right];
	let partIdx = left;

	for (let j = left; j < right; j++) {
		if (nums[j] <= pivotElement) {
			swap(nums, partIdx, j);
			partIdx++;
		}
	}

	swap(nums, partIdx, right);

	return partIdx;
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
const swap = function (arr, i, j) {
	const temp = arr[i];

	arr[i] = arr[j];
	arr[j] = temp;
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
const quickSort = function (nums, left, right) {
	if (left < right) {
		const partIdx = getPartition(nums, left, right);

		quickSort(nums, left, partIdx - 1);
		quickSort(nums, partIdx + 1, right);
	}
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const idxToFind = nums.length - k;

	quickSort(nums, 0, nums.length - 1);

	return nums[idxToFind];
};

const array = [5, 3, 1, 6, 4, 2];
const kToFind = 4;

console.log(findKthLargest(array, 4));
