let A = 123;

let test = function() {
	console.log( "log:test" );
}

class Hello {
	test() {
		console.log( "class: hello" );
	}
}

// 推荐写法
export default {
	A,
	test,
	Hello
}
