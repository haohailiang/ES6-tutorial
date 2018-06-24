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
