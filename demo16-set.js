{
	let list = new Set();
	list.add(5);
	list.add(7);

	console.log('size',list.size);
}

{
    // 数组转化为set
	let arr = [1,2,3,4,5];
	let list = new Set(arr);

	console.log('size',list.size);
}

{
    // 去重[类型不一样,不算重复]
	let list = new Set();
	list.add(1);
	list.add(2);
	list.add(1);
	console.log('list',list);

	let arr=[1,2,3,1,'2'];
	let list2=new Set(arr);
	console.log('unique',list2);
}

{
    // set操作符
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);

	console.log('has',list.has('add'));
	console.log('delete',list.delete('add'),list);
	list.clear();
	console.log('list',list);
}

{
    // 类似于 Map 的特性[key和value值是一样的]
	let arr=['add','delete','clear','has'];
	let list=new Set(arr);

	for(let key of list.keys()){
		console.log('keys',key);
	}

	for(let value of list.values()){
		console.log('value',value);
	}

	for(let [key,value] of list.entries()){
		console.log('entries',key,value);
	}

	list.forEach(function(item){
		console.log(item);
	})
}
