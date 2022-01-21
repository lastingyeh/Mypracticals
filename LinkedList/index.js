// storage memory / space usage
function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.prev = prev;
	this.next = next;
}

// O(1)
LinkedList.prototype.addToHead = function (value) {
	var newNode = new Node(value, this.head, null);

	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}

	this.head = newNode;
};

// O(1)
LinkedList.prototype.addToTail = function (value) {
	var newNode = new Node(value, null, this.tail);

	if (this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode;
	}

	this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
	if (!this.head) {
		return null;
	}

	var val = this.head.value;

	this.head = this.head.next;

	if (this.head) {
		this.head.prev = null;
	} else {
		this.tail = null;
	}

	return val;
};

LinkedList.prototype.removeTail = function () {
	if (!this.tail) {
		return null;
	}

	var val = this.tail.value;

	this.tail = this.tail.prev;

	if (this.tail) {
		this.tail.next = null;
	} else {
		this.head = null;
	}

	return val;
};

// O(n)
LinkedList.prototype.search = function (searchValue) {
	var currentNode = this.head;

	while (currentNode) {
		if (currentNode.value === searchValue) {
			return currentNode.value;
		}
		currentNode = this.head.next;
	}
	return null;
};

// O(n)
LinkedList.prototype.indexOf = function (value) {
	var currentNode = this.head;
	var currentIndex = 0;
	var indexes = [];

	while (currentNode) {
		if (currentNode.value === value) {
			indexes.push(currentIndex);
		}

		currentNode = this.head.next;
		currentIndex++;
	}

	return indexes;
};
