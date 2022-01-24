const globalVariable = 'global var';

function outterFunc(param1) {
	const variable1 = 'var one';

	function innerFunc(param2) {
		const variable2 = 'var two';

		console.log('globalVariable: ', globalVariable);
		console.log('variable1: ', variable1);
		console.log('variable2: ', variable2);
		console.log('param1: ', param1);
		console.log('param2: ', param2);
	}

	innerFunc('param one');
}

outterFunc('param two');

//---
// tab 1

// function getProduct(num1, num2) {
//   return num1 * num2;
// }

function getProduct(num1) {
	return function (num2) {
		return num1 * num2;
	};
}

getProduct(10)(20);

// tab 2

// function getTravelTime(distance, speed) {
//   return distance / speed;
// }

function getTravelTime(distance) {
	return function (speed) {
		return distance / speed;
	};
}

const travelTimeBosNyc = getTravelTime(400);
const travelTimeMiamiAtlanta = getTravelTime(600);
console.log(travelTimeBosNyc(100));
