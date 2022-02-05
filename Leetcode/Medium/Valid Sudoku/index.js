/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	const lineMap = {};
	const columnMap = {};
	const gridMap = {};

	for (let x = 0; x < board.length; x++) {
		for (let y = 0; y < board[0].length; y++) {
			const valueAtPoint = board[x][y];

			if (valueAtPoint === '.') continue;

			const gridKey = `${Math.ceil((x + 1) / 3)}-${Math.ceil((y + 1) / 3)}`;

			if (!lineMap[y]) {
				lineMap[y] = {};
			}

			if (!columnMap[x]) {
				columnMap[x] = {};
			}

			if (!gridMap[gridKey]) {
				gridMap[gridKey] = {};
			}

			if (lineMap[y][valueAtPoint] || columnMap[x][valueAtPoint] || gridMap[gridKey][valueAtPoint]) {
				return false;
			} else {
				lineMap[y][valueAtPoint] = true;
				columnMap[x][valueAtPoint] = true;
				gridMap[gridKey][valueAtPoint] = true;
			}
		}
	}

	return true;
};

// https://leetcode.com/problems/valid-sudoku/

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
