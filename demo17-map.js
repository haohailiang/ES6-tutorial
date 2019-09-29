{
    // key值可以是任意值
	let map = new Map();
	let arr=['123'];

	map.set(arr,456);

	console.log('map',map,map.get(arr));
}

{
	let map = new Map([
		['a',123],
		['b',456]
	]);

	console.log('map args',map);
	console.log('size',map.size);
	console.log('delete',map.delete('a'),map);
	console.log('clear',map.clear(),map);
}

{
	let map = new Map([
		['a',123],
		['b',456]
	]);

	for(let key of map.keys()){
		console.log('keys',key);
	}

	for(let value of map.values()){
		console.log('value',value);
	}

	for(let [key,value] of map.entries()){
		console.log('entries',key,value);
	}

	map.forEach(function(value, key){
		console.log(value, key);
	})

}

// 优先使用 Map和Set
// 放弃使用 Object和Array

{
    // add
	let map = new Map();
	map.set('t', 1);

	console.log("map: ", map);
}

{
    // delete
	let map = new Map();
	map.set('t', 1);

	console.log("delete-map: ", map);
	map.delete('t');
	console.log("delete-map: ", map);
}

{
    // update
	let map = new Map();
	map.set('t', 1);
	map.set('t', 2);

	console.log("map: ", map);
}

{
    // find
	let map = new Map();
	map.set('t', 1);

	let mapBoolean = map.has('t');

	console.log("mapBoolean: ", mapBoolean);
}

// map和WeakMap的区别
// 1.key值必须是对象
// 2.没有size属性
// 3.不能使用clear
// 4.不能遍历

{
	console.group('--------------  map排序 --------------');
	class Queue {
		constructor () {
			this.arr = [];
		}

		// 入队
		entryQueue(key, value) {
			this.arr.push([key, value]);
		}

		// 打印
		print() {

			let thisMap = new Map(this.arr);
			let keys = [];

			thisMap.forEach((value, key) => {
				keys.push(key);
			})

			keys.sort().forEach(key => console.log( thisMap.get(key) ))
		}

		// 出队
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
	console.groupEnd();

}

{
	// 最优算法
	console.group('--------------  最优排序 --------------');
	class Queue {
		constructor () {
			this.arr = [];
		}

		// 入队
		entryQueue(key, value) {
			this.arr.push({
				key,
				value
			});
		}

		// 打印
		print() {

			let arrCopy = this.arr.slice(0);
			arrCopy.sort((a, b) => a['key'].localeCompare(b['key']))
			console.log( arrCopy );
		}

		// 出队
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
	console.groupEnd();
}
