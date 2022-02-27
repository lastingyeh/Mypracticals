const getBoxId = (row, col) => {
	const rowVal = Math.floor(row / 3) * 3;
	const colVal = Math.floor(col / 3);

	return rowVal + colVal;
};

const isValid = (box, row, col, num) => {
	if (box[num] || row[num] || col[num]) return false;

	return true;
};

/**
 * @param {character[][]} board
 * @param {boolean[]} boxes
 * @param {boolean[]} rows
 * @param {boolean[]} cols
 * @param {number} r
 * @param {number} c
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveBacktrack = function (board, boxes, rows, cols, r, c) {
	if (r === board.length || c === board[0].length) {
		return true;
	} else {
		if (board[r][c] === '.') {
			for (let num = 1; num <= 9; num++) {
				const numVal = num.toString();
				board[r][c] = numVal;

				const boxId = getBoxId(r, c);
				const box = boxes[boxId];
				const row = rows[r];
				const col = cols[c];

				if (isValid(box, row, col, numVal)) {
					box[numVal] = true;
					row[numVal] = true;
					col[numVal] = true;

					if (c === board[0].length - 1) {
						if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
							return true;
						}
					} else {
						if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
							return true;
						}
					}

					delete box[numVal];
					delete row[numVal];
					delete col[numVal];
				}

				board[r][c] = '.';
			}
		} else {
			if (c === board[0].length - 1) {
				if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
					return true;
				}
			} else {
				if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
					return true;
				}
			}
		}
	}

	return false;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	const n = board.length;
	const boxes = new Array(n);
	const rows = new Array(n);
	const cols = new Array(n);

	for (let i = 0; i < n; i++) {
		boxes[i] = {};
		rows[i] = {};
		cols[i] = {};
	}

	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (board[r][c] !== '.') {
				const boxId = getBoxId(r, c);
				const val = board[r][c];

				boxes[boxId][val] = true;

				rows[r][val] = true;
				cols[c][val] = true;
			}
		}
	}

	console.log({ boxes, rows, cols });

	solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board);
console.log(board);
