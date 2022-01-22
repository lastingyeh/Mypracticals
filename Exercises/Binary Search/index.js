function binarySearch(numArr, key) {
	var mid = Math.floor(numArr.length / 2);
	var middleElem = numArr[mid];

	if (middleElem === key) {
		return true;
	}

	if (middleElem < key && numArr.length > 1) {
		return binarySearch(numArr.splice(mid, numArr.length), key);
	}

    if (middleElem > key && numArr.length > 1) {
        return binarySearch(numArr.splice(0, mid), key)
    }

	return false;
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));

