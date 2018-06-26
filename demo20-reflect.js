// 反射

{
	let obj={
		time:'2017-03-11',
		name:'net',
		_r:123
	};

	console.log('Reflect get',Reflect.get(obj, 'time'));
	Reflect.set(obj, 'name', 'mukewang');
	console.log(obj);
	console.log('has', Reflect.has(obj, 'name'));
}
