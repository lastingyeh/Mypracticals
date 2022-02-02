const fs = require('fs');
const path = require('path');

const dir = '/Users/chrisyeh/Desktop/MyPracticals/Leetcode/Easy';
const files = fs.readdirSync(dir);

for (const file of files) {
	if (file.toLowerCase() === '.ds_store') continue;

	let filepath = path.join(dir, file, 'index.js');
	console.log('filepath', filepath);

	let filename = file.split(' ').join('-').toLowerCase();
	let url = '// https://leetcode.com/problems/' + filename;

	fs.appendFileSync(filepath, '\r\n' + url);
}
