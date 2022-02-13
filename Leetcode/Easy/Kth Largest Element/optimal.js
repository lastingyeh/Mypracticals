/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const getPartition = function (nums, left, right) {
	// [5,3,1,6,4,2]
	const pivotElement = nums[right];

	let partIdx = left;

	// default set i = j
	// move j that check nums[j] <= pivotElement
	for (let j = partIdx; j < right; j++) {
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
const swap = function (nums, left, right) {
	let tmp = nums[left];

	nums[left] = nums[right];
	nums[right] = tmp;
};

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} indexToFind
 * @return {void}
 */
const quickSort = function (nums, left, right, indexToFind) {
	if (left < right) {
		const partIdx = getPartition(nums, left, right);

        if(partIdx === indexToFind){
            return nums[partIdx]
        }

		if (indexToFind < partIdx) {
			quickSort(nums, left, partIdx - 1, indexToFind);
		} else {
			quickSort(nums, partIdx + 1, right, indexToFind);
		}
	}
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// T: O(N) (best) O(N^2) (worst when desc)
// S: O(1)
var findKthLargest = function (nums, k) {
	const indexToFind = nums.length - k;

	quickSort(nums, 0, nums.length - 1, indexToFind);

	return nums[indexToFind];
};

const array = [5, 3, 1, 6, 4, 2];
const kToFind = 4;

console.log(findKthLargest(array, 4));
