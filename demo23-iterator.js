{
	let arr=['hello','world'];

	// 数组内部实现了这个接口
	let map=arr[Symbol.iterator]();

	console.log(map.next()); // done=true 表示循环已经到了结尾
	console.log(map.next());
	console.log(map.next());
}

{
	// obj 内部实现 iterator接口
	let obj={
		start:[1,3,2],
		end  :[7,9,8],
		// 声明了 Iterator 接口
		[Symbol.iterator](){
			let self  = this;
			let index = 0;
			let arr   = self.start.concat(self.end);
			let len   = arr.length;
			return {
				next(){ // 实现了接口的 next 方法
					if(index<len){
						return {
							value:arr[index++],
							done:false
						}
					}else{
						return {
							value:arr[index++],
							done:true
						}
					}
				}
			}
		}
	}

	for(let key of obj){ // 内部默认调用的是 Iterator 接口
		console.log(key);
	}
}

{
	let arr=['hello','world'];
	for(let value of arr){
		console.log('value',value);
	}
}

{
	let arr = ['a', ['b', 'c'], 2, ['d', 'e', 'f'], 'g', 3, 4];

	Array.prototype[Symbol.iterator] = function(){
		let arr = [].concat(this);
		let getFirst = function (array) {
			let first = array.shift();
			return first;
		};

		return {
			next: function() {
				let item = getFirst(arr);
				if(item) {
					return {
						value: item,
						done: false
					};
				}else{
					return {
						done: true
					}
				}
			}
		}
	}

	let flat = function(arr) {
		let r = [];
		for(let item of arr) {
			r.push(item);
		}
		console.log( r );
		return r.join('#');
	}
	console.log( flat(arr) );
}
