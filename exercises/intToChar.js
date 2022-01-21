const str = 'Chris hello world';
let nums = [];

for (let i = 0; i < str.length; i++) {
	nums.push(str.charCodeAt(i));
}

let numstr = nums.join('');

// console.log(numstr);

let renums = [];

for (let i = numstr.length - 1; i >= 0; i--) {
	renums.push(numstr[i]);
}

// console.log(renums.join(''));

// ----

// reverse string
const res = [];

for (let i = renums.length - 1; i >= 0; i--) {
	res.push(renums[i]);
}

// console.log(res.join(''));

// solution
var strarr = res;
let currentIdx = 0;
let nextIdx = 2;

const newRes = [];

while (currentIdx < res.length) {
	var val = res.slice(currentIdx, nextIdx).join('');
	var d2 = parseInt(val);

	if (d2 === 32) {
		newRes.push(' ');
	} else if (d2 > 64 && d2 <= 90) {
		const d2str = String.fromCharCode(d2);
		newRes.push(d2str);
	} else {
		nextIdx += 1;

		val = res.slice(currentIdx, nextIdx).join('');

		const d3 = parseInt(val);
		const d3str = String.fromCharCode(d3);

		newRes.push(d3str);
	}

	currentIdx = nextIdx;
	nextIdx += 2;
}

console.log(newRes.join(''));
