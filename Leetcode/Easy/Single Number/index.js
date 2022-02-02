/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
			return nums[i];
		}
	}

    return nums[0];
};

// var singleNumber = function(nums) {
//     nums.sort((a,b) => a - b)
    
//     for(let i = 0; i<nums.length;i++) {
//         const prev = nums[i-1]
//         const next = nums[i+1]
//         const curr = nums[i]
        
//         if (prev !== curr && curr !== next){
//             return curr;
//         }
//     }
// };

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));


// https://leetcode.com/problems/single-number