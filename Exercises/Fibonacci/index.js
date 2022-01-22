function fibonacci(position) {
	// 1, 1, 2, 3, 5, 8

	if (index === 0) {
		return 0;
	}

	if (position === 1 || position === 2) {
		return 1;
	}

	// return fib value
	return fibonacci(position - 2) + fibonacci(position - 1);
}

function fibMemo(index, cache) {
	cache = cache || [];

	if (cache[index]) {
		return cache[index];
	}

	if (index === 0) {
		return 0;
	}

	if (index === 1 || index === 2) {
		return 1;
	} else {
		cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
	}

	return cache[index];
}

console.log(fibonacci(2));
console.log(fibMemo(50));
