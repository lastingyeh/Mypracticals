const data = [6, 3, 5, 9, 7, 8, 4, 2];
// init btree array
const btree = new Array(data.length * 2).fill(0);

// original array
for (let i = 0; i < data.length; i++) {
	console.log(`[${data[i]}]`);
}

let level = 0;

// put to btree array
for (let i = 0; i < data.length; i++) {
	for (level = 1; btree[level] !== 0; ) {
		if (data[i] > btree[level]) {
			level = level * 2 + 1;
		} else {
			level = level * 2;
		}
	}
	btree[level] = data[i];
}

console.log(btree);
