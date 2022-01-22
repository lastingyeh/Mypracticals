function sieveOfEratosthenes(num) {
	// return all prime numbers up
	// to num in an array
	var primes = [];

	for (var i = 0; i <= num; i++) {
		primes[i] = true;
	}

	primes[0] = false;
	primes[1] = false;

	for (var i = 2; i <= Math.sqrt(num); i++) {
		for (var j = 2; i * j <= num; j++) {
			primes[i * j] = false;
		}
	}

	var result = [];

	for (var i = 0; i < primes.length; i++) {
		if (primes[i]) {
			result.push(i);
		}
	}

	return result;
}

console.log(sieveOfEratosthenes(16));
