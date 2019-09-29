class Queue {
	constructor () {
		this.arr = [];
	}

	entryQueue(key, value) {
		this.arr.push({[key]: value});
	}

	print() {
		let arrCopy = this.arr.slice(0);
		let keys = [];
		let arrSort = [];
		arrCopy.forEach(item => keys.push(Object.keys(item)[0]))
		// console.log( keys );
		keys.sort().forEach(key => {
			arrCopy.forEach(item => {
				let tempKey = Object.keys(item)[0];
				if(tempKey === key) {
					arrSort.push(item);
				}
			})
		})
		console.log( arrSort );
	}

	deQueue() {
		this.arr.shift();
	}
}

const queue = new Queue();
queue.entryQueue('key-1-2', 'value-1-2');
queue.entryQueue('key-1-1', 'value-1-1');
queue.entryQueue('key-2-2', 'value-2-2');
queue.entryQueue('key-3-2', 'value-3-2');
queue.print();
queue.deQueue();
console.log( "--" );
queue.print();
