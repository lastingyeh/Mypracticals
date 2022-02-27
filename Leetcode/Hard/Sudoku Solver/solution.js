function solveSudoku(board) {
	/* 
        rows, cols, boxes are what I use to keep track of whether a valid placement can be made. 
        A valid placement can be made if the number is not contained in rows, cols, and boxes.
        getBoxKey is a simple formula to keep track of what "box" you are in at any time. keys are 0-8.
        Solved is our solution condition. 
        First for loops simply build rows, cols, and boxes. So we have 9 sets of each.
        Second for loop places all initial positions into rows, cols, boxes.
    */
	const rows = new Map();
	const cols = new Map();
	const boxes = new Map();
	let solved = false;
	const getBoxKey = (i, j) => 3 * Math.floor(i / 3) + Math.floor(j / 3);

	for (let i = 0; i < 9; i++) {
		rows.set(i, new Set());
		cols.set(i, new Set());
		boxes.set(i, new Set());
	}

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== '.') {
				rows.get(i).add(board[i][j]);
				cols.get(j).add(board[i][j]);
				boxes.get(getBoxKey(i, j)).add(board[i][j]);
			}
		}
	}

	const backtrack = (i, j) => {
		/*
            i === 9 is our the condition that once we hit we have a solved board
            We know the board will be solved correctly once i equals 9 due to the contraints in decisions we are making.
            We can only ever make valid placements on the board. If placement is found to be contradictory we backtrack out of it
            and try again.
        */
		if (i === 9) {
			solved = true;
			return;
		}

		let newI = i + Math.floor((j + 1) / 9); // every 9th placement we need to itereate i
		let newJ = (j + 1) % 9; // j represents moving along a row, iterates every move, resets to zero after 9 movements

		if (board[i][j] !== '.') {
			/* 
                position was predefined thus we have only one decision here and are guaranteed this move is correct.
                this is why we don't need to "unmake" the move and can simply move to the next move.
            */
			backtrack(newI, newJ);
		} else {
			for (let c = 1; c < 10; c++) {
				/*
                    for any placement try numbers 1 - 9 given our contraints.
                    if the number is not valid then we move on and try the next number
                */
				const n = String(c);
				const rInc = rows.get(i).has(n);
				const cInc = cols.get(j).has(n);
				const bInc = boxes.get(getBoxKey(i, j)).has(n);

				if (!rInc && !cInc && !bInc) {
					// verify the number is valid and we can place in the current square
					// tighten our contraints/decisions by adding number to rows, cols, and boxes
					// then make move by placing number on the board if it's valid
					rows.get(i).add(n); // make moves
					cols.get(j).add(n);
					boxes.get(getBoxKey(i, j)).add(n);
					board[i][j] = String(n);
					backtrack(newI, newJ);

					if (solved === false) {
						// we need the if statement here so we don't accidently "unmake" a move at the end once the board is solved
						rows.get(i).delete(n); // unmake moves
						cols.get(j).delete(n);
						boxes.get(getBoxKey(i, j)).delete(n);
						board[i][j] = '.';
						// moves are unmade so the next iteration can have the same starting constraints as previous
					}
				}
			}
		}
	};

	backtrack(0, 0); // start at top left of board
}
