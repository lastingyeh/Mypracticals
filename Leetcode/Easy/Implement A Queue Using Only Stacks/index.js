class QueueWithStacks {
	constructor() {
		this.in = [];
		this.out = [];
	}
	// [1,2,3,4,5]
	enqueue(val) {
		this.in.push(val);
	}

	dequeue() {
		if (this.out.length === 0) {
			while (this.in.length) {
				// [5,4,3,2,1]
				this.out.push(this.in.pop());
			}
		}
		// 1
		return this.out.pop();
	}

	peek() {
		if (this.out.length === 0) {
			while (this.in.length) {
				// [5,4,3,2,1]
				this.out.push(this.in.pop());
			}
		}
		// 1
		return this.out.shift();
	}

    empty(){
        return this.in.length === 0 && this.out.length === 0;
    }
}

let q = new QueueWithStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.peek());

