var house = {
	price: 100000,
	squareFeet: 2000,
	owner: 'Taylor',
	getPricePerSquareFoot: function () {
		return this.price / this.squareFeet;
	},
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
