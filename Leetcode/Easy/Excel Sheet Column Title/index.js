/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	const indexAscii = 64;
	const letters = 26;

	let letter = 0,
		column = '';

	while (columnNumber > 0) {
		letter = columnNumber % letters;

		if (!letter) letter = letters;

		columnNumber = (columnNumber - letter) / letters;

		column = String.fromCharCode(indexAscii + letter) + column;
	}

	return column;
};

convertToTitle(2147483647);
