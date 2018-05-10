//函数传参
let sum = (...rest) => {
	let total = 0;
	for(let i of rest){
		total += i;
	}
	return total;
}
console.log(sum(1, 2, 3));// 6
console.log(sum(1, '', 3));// 13

//数组展开
console.log(...[1, 2, 3]);//1 2 3

let arr = [1, 2, 3];
console.log(...arr);//1 2 3

//数组拼接
let arr2 = [...[1, 2, 3], ...['one', 'two', 'three']];
console.log(...arr2);//1 2 3 'one' 'two' 'three'

//数组拆分
let [x, ...y] = [1, 2, 3, 4];
console.log(x, y);//x:1, y:2,3,4

//字符串拆分成字符串数组
let xy = [...'vue'];
console.log(xy);//xy:v,u,e
