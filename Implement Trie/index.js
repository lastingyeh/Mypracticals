class TrieNode {
	constructor() {
		this.end = false;
		this.keys = {};
	}
}

// https://leetcode.com/problems/implement-trie-prefix-tree/
// S: O(N); O(L)
// T: O(L)
class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	/**
	 *
	 * @param {string} word
	 * @param {TrieNode} node
	 */
	insert(word, node = this.root) {
		if (word.length === 0) {
			node.end = true;
			return;
		}

		if (!node.keys[word[0]]) {
			node.keys[word[0]] = new TrieNode();
		}

		this.insert(word.substring(1), node.keys[word[0]]);
	}
	/**
	 *
	 * @param {string} word
	 * @param {TrieNode} node
	 * @return {boolean}
	 */
	search(word, node = this.root) {
		if (word.length === 0 && node.end) return true;

		if (word.length === 0) return false;

		if (!node.keys[word[0]]) return false;

		return this.search(word.substring(1), node.keys[word[0]]);
	}

	/**
	 *
	 * @param {string} prefix
	 * @param {TrieNode} node
	 * @return {boolean}
	 */
	startWith(prefix, node = this.root) {
		if (prefix.length === 0) return true;

		if (!node.keys[prefix[0]]) return false;

		return this.startWith(prefix.substring(1), node.keys[prefix[0]]);
	}
}

const trie = new Trie();

trie.insert('apple');

console.log({ trie });

console.log(trie.search('apple')); // true
console.log(trie.search('app')); // false
console.log(trie.startWith('app')); // true

trie.insert('dog');
trie.insert('app');

console.log(trie.search('app')); // true
