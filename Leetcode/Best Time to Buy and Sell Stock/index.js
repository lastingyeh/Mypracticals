/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let buy = prices[0];
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - buy < 0) {
			buy = prices[i];
		}
		maxProfit = Math.max(prices[i] - buy, maxProfit);
	}

	return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));

