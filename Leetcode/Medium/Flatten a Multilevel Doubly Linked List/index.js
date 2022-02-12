/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
// T: O(N)
// S: O(1)
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
	if (!head) return head;

	let currentNode = head;

	while (currentNode !== null) {
		if (currentNode.child === null) {
			currentNode = currentNode.next;
		} else {
			// merge child
            // ex(3)
            // ex(7,8,9,10)
			let tail = currentNode.child;
            // ex(10)
			while (tail.next !== null) {
				tail = tail.next;
			}
            // ex(10) -> ex(4)
			tail.next = currentNode.next;

			if (tail.next !== null) {
				tail.next.prev = tail;
			}

            // ex(3) -> ex(7)
			currentNode.next = currentNode.child;
            // ex(3)
			currentNode.next.prev = currentNode;
            // ex(3) child = null
            currentNode.child = null;
		}
	}

    return head;
};

// input
// [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]

// 1---2---3---4---5---6
//         |
//         7---8---9---10
//             |
//             11---12

// output
// 1-2-3-7-8-11-12-9-10-4-5-6
