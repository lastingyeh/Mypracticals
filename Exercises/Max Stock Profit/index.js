function maxStockProfit(pricesArr) {
	// var max = pricesArr[0];
	// var min = pricesArr[0];

	// for (var i = 0; i < pricesArr.length; i++) {
	// 	if (max < pricesArr[i + 1]) {
	// 		max = pricesArr[i + 1];
	// 	}

	// 	if (min > pricesArr[i + 1]) {
	// 		min = pricesArr[i + 1];
	// 	}
	// }

	// if(max - min <= 0){
	//     return -1
	// }

	// return max - min;
	var maxProfit = -1;
	var buyPrice = 0;
	var sellPrice = 0;
	var changeBuyPrice = true;

	for (var i = 0; i < pricesArr.length; i++) {
		if (changeBuyPrice) {
			buyPrice = pricesArr[i];
		}

		sellPrice = pricesArr[i + 1];

		if (sellPrice < buyPrice) {
			changeBuyPrice = true;
		} else {
			var tempProfit = sellPrice - buyPrice;

			if (tempProfit > maxProfit) {
				maxProfit = tempProfit;
			}
			changeBuyPrice = false;
		}
	}

	return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
