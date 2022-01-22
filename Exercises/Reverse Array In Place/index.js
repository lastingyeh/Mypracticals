function reverseArrayInPlace(arr) {
	// 0 -> 3 => idx = 0 => 4 - 1 - i(0) = 3
	// 1 -> 2 => idx = 1 => 4 - 1 - i(1) = 2
	// 2 -> 1 => idx = 2 => 4 - 1 - i(2) = 1
	// 3 -> 0 => dix = 3 => 4 - 1 - i(3) = 0
	for (var i = 0; i < arr.length / 2; i++) {
		var tmp = arr[i];

		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tmp;
	}

	return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));

