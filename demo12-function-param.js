{
	let x = 'test';

    // 这个x和前边的x没有半毛钱关系
	function test2(x, y=x, z=10){
		console.log('作用域', x, y, z);
	}

	test2();
	test2('kill');
}
