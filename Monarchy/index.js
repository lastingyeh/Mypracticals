class Person {
	constructor(name) {
		this.name = name;
		this.isAlive = true;
		this.children = [];
	}
}

class Monarchy {
	constructor(king) {
		// top parent
		this.king = new Person(king);
		// [hashmap] (persons)
		this._persons = {
			[this.king.name]: this.king,
		};
	}

	birth(childName, parentName) {
		// find person of [parent]
		const parent = this._persons[parentName];
		// create person of [child]
		const newChild = new Person(childName);
        // push child to parent 
		parent.children.push(newChild);
        // set to [hashmap] of [child]
		this._persons[childName] = newChild;
	}

	death(name) {
        // find [hashmap] of [child]
		const person = this._persons[name];

		if (person === undefined) {
			return null;
		}
        // set [person].isAlive = false
		person.isAlive = false;
	}

	getOrderOfSuccession() {
		const order = [];

		this._dfs(this.king, order);

		return order;
	}

	_dfs(currentPerson, order) {
        // get isAlive person
		if (currentPerson.isAlive) {
			order.push(currentPerson.name);
		}
        // loop [person].children
		for (let i = 0; i < currentPerson.children.length; i++) {
			this._dfs(currentPerson.children[i], order);
		}
	}
}

const mon = new Monarchy('Jake');

mon.birth('Catherine', 'Jake');
mon.birth('Tom', 'Jake');
mon.birth('Celine', 'Jake');
mon.birth('Peter', 'Celine');
mon.birth('Jane', 'Catherine');
mon.birth('Farah', 'Jane');
mon.birth('Mark', 'Catherine');

console.log(mon.getOrderOfSuccession());

mon.death('Jake');
mon.death('Jane');

console.log(mon.getOrderOfSuccession());
