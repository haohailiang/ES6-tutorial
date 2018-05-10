// 尾调用-递归时提升性能
{
	function tail(x){
		console.log('tail',x);
	}

	function fx(x){
		return tail(x)
	}

	fx(123)
}
