// Array和Map的对比

{
    // add
	let map = new Map();
	let arr = [];

	map.set('t', 1);
	arr.push({t: 1});

	console.log("map-array: ", map, arr);
}

{
    // delete
	let map = new Map();
	let arr = [];

	map.set('t', 1);
	arr.push({t: 1});

	map.delete('t');
	var index = arr.findIndex(item => item.t===1);
	
    // 从位置index删除1个元素
	arr.splice(index, 1);

	console.log("map-arr: ", map, arr);
}

{
    // update
	let map = new Map();
	let arr = [];

	map.set('t', 1);
	arr.push({t: 1});

	map.set('t', 2);
	arr.forEach(item => item.t? item.t=2:'');

	console.log("map-arr: ", map.get('t'), arr);
}

{
	// find
	let map = new Map();
	let arr = [];

	map.set('t', 1);
	arr.push({t: 1});

	let mapBoolean = map.has('t')
	let arrBoolean = arr.find(item => item.t);

	console.log("mapBoolean-arrBoolean: ", mapBoolean, arrBoolean);
}
