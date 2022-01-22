function twoSum(numArr, sum) {
	var pairs = [];
	var hashtable = [];

	for (var i = 0; i < numArr.length; i++) {
		var currNum = numArr[i];
		var counterpart = sum - currNum;

		if (hashtable.indexOf(counterpart) !== -1) {
			pairs.push([currNum, counterpart]);
		}

        hashtable.push(currNum);
	}

    return pairs;
}

console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
