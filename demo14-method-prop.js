{
	let o=1;
	let k=2;
	let es5={
		o:o,
		k:k
	};

    // 相同属性名简写
	let es6={
		o,
		k
	};
	console.log(es5, es6);

    // 方法名称简写
	let es5_method={
		hello:function(){
			console.log('hello');
		}
	};
	let es6_method={
		hello(){
			console.log('hello');
		}
	};
	console.log(es5_method.hello(), es6_method.hello());
}

// 使用变量作为属性值
{
	let a='b';
	let es5_obj={
		a:'c',
		b:'c'
	};

	let es6_obj={
		[a]:'c'
	}

	console.log(es5_obj, es6_obj);
}

{
    // 判断2个变量是否相等
	var str1 = Object.is('abc','abc');
	var str2 = 'abc'==='abc';
	console.log('字符串', str1, str2); // true true

	var arr1 = Object.is([],[]);
	var arr2 = []===[];
	console.log('数组', arr1, arr2); // false false
}

{
    // 遍历key, value值[只会遍历可见属性]
	let test={k:123, o:456};
    for(let [key,value] of Object.entries(test)){
      console.log([key,value]);
    }
}

{
	let nextObj = {
		level2: 2,
		nextObj: {
			level3: 3
		}
	};
	var newObj = {
		level1: 1,
		nextObj: nextObj
	};
	var objCopy = Object.assign({a:'a'},{b:'b'});
	var objCopy2 = Object.assign({}, newObj);

	nextObj.nextObj.level3 = 100;

	console.log('拷贝', objCopy);

    // 浅拷贝, 对象所引用的数据发生改变,copy后的数据也会发生改变
	console.log('拷贝', objCopy2);
	console.log('原对象', nextObj);
}
