function bubbleSort(arr) {
	for (var i = arr.length; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				var tmp = arr[j];

				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}

	return arr;
}

console.log(bubbleSort([5, 3, -8, 2, 1, 4]));
