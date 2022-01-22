function reverseWords(str) {
	// ['It', 'is', 'dog']
	var wordsArr = str.split(' ');
	var newStrArr = [];

	wordsArr.forEach(w => {
		var newStr = '';

		for (var i = w.length - 1; i >= 0; i--) {
			newStr += w[i];
		}

		newStrArr.push(newStr);
	});

    return newStrArr.join(' ');
}

console.log(reverseWords('It is dog'));
