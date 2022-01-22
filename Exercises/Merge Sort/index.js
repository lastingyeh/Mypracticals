function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var middleIndex = Math.floor(arr.length / 2);
	var firstArr = arr.slice(0, middleIndex);
	var secondArr = arr.slice(middleIndex);

    return merge(mergeSort(firstArr), mergeSort(secondArr));
}

function merge(arr1, arr2) {
	var result = [];

	while (arr1.length && arr2.length) {
		var minElem;

		if (arr1[0] < arr2[0]) {
			minElem = arr1.shift();
		} else {
			minElem = arr2.shift();
		}

		result.push(minElem);
	}

	if (arr1.length) {
		result = result.concat(arr1);
	} else {
		result = result.concat(arr2);
	}

	return result;
}

mergeSort([11, 7, 4, 1, 15, 12, 3]);
