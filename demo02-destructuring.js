// 解构总的原则是
// 等号两边的格式是一样的
{
	let [a, b] = [3, 8, 10];
	let [x, y, z] = 'vue';
	console.log(a, b, x, y, z); // 3, 8, v, u, e
}

{
	let {key1, key2} = {key1:10, key2:20};
	console.log(key1, key2); // 10, 20
}

{
  let {key1=10, key2=5} = {key1:3};
  console.log(key1, key2);
}

// 复合解构
{
	let metaData={
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]
	}
	let {
		title:esTitle,
		test:[{
			title:cnTitle
		}]
	} = metaData;
	console.log(esTitle, cnTitle);
}

{
	function sum([a, b]){
		return a + b;
	}
	console.log(`sum: ${sum([1,2])}`);//sum: 3
}

{
	let [a,b,c=3]=[1,2];
    console.log(a,b,c);
}

// 这个交换写的好
{
	let a=1;
	let b=2;
	[a,b]=[b,a];
	console.log(a,b);
}

// 只挑选其中的几个值取值
{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,b,...c]=f();
  console.log(a,b,c);
}

// demo02解构
// 数组
// 字符串
// 对象
// 函数传参
