var MinStack = function () {
	this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	if (this.stack.length <= 0) {
		this.stack.push([val, val]);
	} else {
        // put [val, minval]
		const top = this.stack[this.stack.length - 1];

		this.stack.push([val, Math.min(top[1], val)]);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.stack[this.stack.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
