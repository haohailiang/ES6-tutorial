// 代理

{
	let obj={
		time:'2017-03-11',
		name:'net',
		_r:123
	};

	let monitor=new Proxy(obj,{

		// 拦截对象属性的读取
		get(target, key){
			// console.log("target: ", target); // target就是被代理的对象
			return target[key].replace('2017','2018')
		},

		// 拦截对象设置属性
		set(target, key,value){
			if(key === 'name'){
				return target[key] = value;
			}else{
				return target[key];
			}
		},

		// 拦截 key in object 操作
		has(target, key){
			if(key==='name'){
				return target[key]
			}else{
				return false;
			}
		},

		// 拦截delete [包含 _ 的属性值可以被删除, 其他不可以删除]
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){
				delete target[key];
				return true;
			}else{
				return target[key]
			}
		},

		// 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        // 主要不是time就可以被遍历
		ownKeys(target){
			return Object.keys(target).filter(item=>item !== 'time')
		}
	});

    // 返回的对象属性已经被代理修改
	console.log("get monitor.time: ", monitor.time);

	monitor.time='2018';
	monitor.name='mukewang';

    // 只有name属性可以修改,其他属性不能修改
	console.log("set obj, monitor: ", obj, monitor);

	// 拦截 key in object 操作
	console.log('has','name' in monitor, 'time' in monitor);

	// 对下边暂时有影响, 先注释掉
	// delete monitor.time;
	// console.log('delete', monitor);
    //
	// delete monitor._r;
	// console.log('delete', monitor);

	console.log('ownKeys',Object.keys(monitor));
}

{
    // 条件和业务逻辑完全隔离开来, 不用混杂在一起
    // 校验器[条件判断]
	function validator(target, validator) {
		return new Proxy(target, {
			_validator : validator,
			set(target, key, value, proxy) {
				if(target.hasOwnProperty(key)) {
					let va = this._validator[key];

                    // 根据外边传进来的验证器判断, 成功的话可以赋值
					if(!!va(value)) {
						console.log("Boolean: ", !!va(value));
						return Reflect.set(target, key, value, proxy);
					}else{
						throw Error(`不能设置 ${key} 到 ${value}`)
					}
				}else{
					throw Error('${key} 值不存在!');
				}
			}
		});
	}

    // 注意这个是没有分号的[业务逻辑]
	const personValidators = {
		name(val) {
			return typeof val === 'string'
		},

		age(val) {
			return typeof val === 'number' && val > 18
		}
	}

	class Person {
		constructor(name, age) {
			this.name = name;
			this.age  = age;
			return validator(this, personValidators);
		}
	}

	const person = new Person('lilei', 30); // 初始化可以30, 但是设置不可以30
	console.log("person: ", person);

    // Error: 不能设置 name 到 48
	// person.name = 48; //这里会报上边的错误
	person.name = 'Han Meimei';
	console.log("person: ", person);

	person.age = 31;
	console.log("person: ", person);
}
