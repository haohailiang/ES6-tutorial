// 集合转化为数组
{
	let arr = Array.of(3,4,7,9,11);
	console.log('arr=',arr);

	let empty=Array.of();
	console.log('empty',empty);
}

// 集合元素转化为数组
{
	let p=document.querySelectorAll('p');
	let pArr=Array.from(p);
	pArr.forEach(function(item){
		console.log(item.textContent);
	});

    // 遍历操作
	console.log(Array.from([1,3,5],function(item){
		return item*2
	}));
}

{
    // 全局用7进行替换
	let arr1 = [1,'a',undefined].fill(7);

    // 1-3位置用8替代
	let arr2 = ['a','b','c'].fill(7,1,3);

	console.log('fill-7', arr1);
	console.log('fill,pos', arr2);
}

{
    // 从0的位置开始替换,用3-4的位置进行替换
	let arr1 = [1,2,3,4,5].copyWithin(0,3,4);
	console.log(arr1);
}
