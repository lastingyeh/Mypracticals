/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (!haystack && !needle) {
		return 0;
	}

    if(!haystack){
        return -1;
    }

    let idx = haystack.indexOf(needle, 0);

    return idx;
};

console.log(strStr('', ''));
