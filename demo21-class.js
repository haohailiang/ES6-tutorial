{
	// 基本定义和生成实例
	class Parent{
		constructor(name='mukewang'){
			this.name=name;
		}
	}

	let v_parent  = new Parent('v');
	let v_parent2 = new Parent();
	console.log('构造函数和实例', v_parent, v_parent2);
}

{
	// 继承
	class Parent{
		constructor(name='mukewang'){
			this.name=name;
		}
	}

	class Child extends Parent{
	}

	console.log('继承', new Child());
}

{
	// 继承传递参数
	class Parent{
		constructor(name='mukewang'){
			this.name=name;
		}
	}

	class Child extends Parent{
		constructor(name='child'){
			super(name); // 如果为空, 就会使用父类的 mukewang
			this.type='child'; // 定义自己的必须放在 super 之后
		}
	}

	console.log('继承传递参数', new Child('hello'));
}

{
	// getter,setter
	class Parent{
		constructor(name='mukewang'){
			this.name=name;
		}

        // 这是实例的属性, 不是方法
		get longName(){
			return 'mk'+this.name
		}

		// 这是实例的属性, 不是方法
		set longName(value){
			this.name=value;
		}
	}

	let v=new Parent();
	console.log('getter',v.longName);

	v.longName='hello';
	console.log('setter',v.longName);
	console.log("parent : ", v);
}

{
	// 静态方法
    // 通过类调用
    // 不是通过类的方法调用
	class Parent{
		constructor(name='mukewang'){
			this.name=name;
		}

		static tell(){
			console.log('tell');
		}
	}

	Parent.tell();
}

{
	// 静态属性
	class Parent{
		constructor(name='mukewang'){
			this.name=name;
		}

		static tell(){
			console.log('tell');
		}
	}

	Parent.type='test';

	console.log('静态属性',Parent.type);
}

{
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		sayHello() {
			console.log(this.name, this.age);
		}
	}

	class Student extends Person {
		constructor(name, age, score) {
			super(name, age);
			this.score = score;
		}

		sayHello() {
			super.sayHello();
			console.log(this.score);
		}
	}

	// 父对象的调用
	let p = new Person('lilei', 18);
	p.sayHello();

	let s = new Student('lilei', 18, 150);
	s.sayHello();
}
