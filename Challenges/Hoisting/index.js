// part1
// tab 1

console.log('tab1', color); // undefined

var color = 'blue';

console.log('tab1', color); // blue

//tab 2

var color;

console.log('tab2', color); // blue

color = 'blue';

console.log('tab2', color); // blue;

// tab 3

console.log('tab3', getProduct(2, 3));

var getProduct = function (num1, num2) {
	return num1 * num2;
};

console.log('tab3', getProduct(2, 3));

// tab 4

console.log('tab4', getProduct(2, 3));

function getProduct(num1, num2) {
	return num1 * num2;
}

// tab 5

var globalVar = 'global';

(function () {
	var name = 'Jen';

	var getAge = function () {
		return '30';
	};

	function getState() {
		return 'Delaware';
	}
})();

// --------------------
// part2
// tab 1

function getTotal() {
	console.log(multiplier);
	console.log(total);

	let total = 0;

	for (var i = 0; i < 10; i++) {
		let valueToAdd = i;
		var multiplier = 2;
		total += valueToAdd * multiplier;
	}

	return total;
}

getTotal();

// tab 2

function getTotal() {
	let total;
	var multiplier;

	total = 0;

	for (var i = 0; i < 10; i++) {
		let valueToAdd;

		valueToAdd = i;
		multiplier = 2;
		total += valueToAdd * multiplier;
	}

	return total;
}

getTotal();
