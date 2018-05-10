// 独一无二
{
	let a1=Symbol();
	let a2=Symbol();
	console.log(a1 === a2); // false

    // 如果在全局中可以找到a3, 就用a3的值
    // 找不到就跟Symbol一样重新赋值
	let a3=Symbol.for('a3');
	let a4=Symbol.for('a3');
	console.log(a3 === a4);  // true
}

{
    // 就这么叼, 偏偏喜欢这个名字[顺序不一行, entries的结果不一样]
	let a1=Symbol.for('abc');
	let obj={
		'abc':345,
		'c':456,
		[a1]:'123'
	};
	// let obj={
	// 	[a1]:'123',
	// 	'abc':345,
	// 	'c':456
	// };
	console.log('obj',obj);

    // 遍历这个个性的值[只打印出了abc]
	for(let [key,value] of Object.entries(obj)){
		console.log('let of',key,value);
	}

    // 只打印出了123
	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item]);
	})

    // 最牛B,所有的情况都可以打印出来
	Reflect.ownKeys(obj).forEach(function(item){
		console.log('ownkeys',item,obj[item]);
	})
}
