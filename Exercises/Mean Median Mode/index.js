function meanMedianMode(arr) {
	return {
		mean: getMean(arr),
		mean: getMedian(arr),
		mean: getMode(arr),
	};
}

function getMean(arr) {
	var sum = 0;

	arr.forEach(n => {
		sum += n;
	});

	return sum / arr.length;
}

function getMedian(arr) {
	arr.sort((a, b) => a - b);

	var median;

	if (arr.length % 2 !== 0) {
		// 12345
		median = arr[Math.floor(arr.length / 2)];
	} else {
		var mid1 = arr[arr.length / 2 - 1];
		var mid2 = arr[arr.length / 2];

		median = (mid1 + mid2) / 2;
	}

	return median;
}

function getMode(arr) {
	var modeObj = {};

	arr.forEach(n => {
		if (!modeObj[n]) {
			modeObj[n] = 0;
		}
		modeObj[n]++;
	});

	var maxFrequency = 0;
	var modes = [];

	for (var n in modeObj) {
		if (modeObj[n] > maxFrequency) {
			modes = [n];
			maxFrequency = modeObj[n];
		} else if (modeObj[n] === maxFrequency) {
			modes.push(n);
		}
	}

	if (modes.length === Object.keys(modeObj).length) {
		modes = [];
	}

	return modes;
}

console.log(getMode([1, 2, 3, 3, 4, 5, 5, 9]));
console.log(getMode([1, 2, 3, 4, 5, 9]));
