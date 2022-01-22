function harmlessRansomNote(noteText, magazineText) {
	var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');
	var magazineObj = {};

	// O(n)
	magazineArr.forEach(w => {
		if (!magazineObj[w]) {
			magazineObj[w] = 0;
		}

		magazineObj[w]++;
	});

    console.log('before', magazineObj);

	// O(m)
	var notIsPossible = true;

	noteArr.forEach(w => {
		if (magazineObj[w]) {
			magazineObj[w]--;

			if (magazineObj[w] < 0) {
				notIsPossible = false;
			}
		} else {
			notIsPossible = false;
		}
	});

    console.log('after', magazineObj);

	return notIsPossible;
}

// Time complexity O(n+m) = O(n)
var isNote = harmlessRansomNote(
	'this is a secret note for you from a secret admirer',
	'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
);

console.log(isNote);
