// for...of 允许你遍历
// Arrays（数组）
// Strings（字符串）
// Maps（映射）
// Sets（集合）
// 等可迭代的数据结构等

// 遍历对象的属性
{
	console.group('--------------  Person --------------');
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		sayHello() {
			let logArr = [];
			for(const [key, value] of Object.entries(this)){
				logArr.push(value);
			}
			console.log( ...logArr );
			console.log( "1", "2" );
		}
	}

	const p = new Person('lilei', 18);
	p.sayHello();
	console.groupEnd();
}

// 数组
{
	console.group('--------------  数组 --------------');
	const iterable = ['mini', 'mani', 'mo'];
	for(const temp of iterable) {
		console.log( temp );
	}
	console.groupEnd();
}

// map
{
	console.group('--------------  map --------------');
	const iterable = new Map([['one', 1], ['two', 2], [3, 4]]);

	for (const [key, value] of iterable) {
		console.log(`${key} - ${value}`);
	}
	console.groupEnd();
}

// set
{
	console.group('--------------  set --------------');
	const iterable = new Set([1, 1, 2, 2, 1]);

	for (const value of iterable) {
		console.log(value);
	}
	console.groupEnd();
}

// string字符串
{
	console.group('--------------  string --------------');
	const iterable = 'javascript';

	for (const value of iterable) {
		console.log(value);
	}
	console.groupEnd();
}

// 函数参数
{
	console.group('--------------  arguments --------------');
	function fun() {
		for(const value of arguments) {
			console.log( value );
		}
	}
	fun(1, 2, 3);
	console.groupEnd();
}

// 函数参数
{
	console.group('--------------  rest --------------');
	function fun(...rest) {
		for(const value of rest) {
			console.log( value );
		}
	}
	fun(1, 2, 3);
	console.groupEnd();
}

// generator
{
	console.group('--------------  generator --------------');
	function* generator() {
		yield 1;
		yield 2;
		yield 3;
	}
	for(const item of generator()) {
		console.log( item );
	}
	console.groupEnd();
}
