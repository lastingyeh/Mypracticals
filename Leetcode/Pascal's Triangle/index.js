/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	if (numRows < 1) return [];
	if (numRows === 1) return [[1]];

	const triangle = [[1]];

	for (let i = 1; i < numRows; i++) {
        let prev = triangle[i-1];
        const curr = [];

        curr.push(1);

		for (let j = 1; j < prev.length; j++) {
			curr[j] = prev[j-1] + prev[j];
		}
        
		curr.push(1);

        triangle.push(curr);
	}

	return triangle;
};

console.log(generate(5));
