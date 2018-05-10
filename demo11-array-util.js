// 比较使用的数组方法
{
    // 过滤操作[返回指定的单个元素]
	let ele = [1,2,3,4,5,6].find(function(item){
		return item>3
	});

    // 返回指定单个元素的索引
	let eleIndex = [1,2,3,4,5,6].findIndex(function(item){
		return item>3
	});

	console.log(ele);
	console.log(eleIndex);
}

// 查找是否包含指定的元素
{
	let isContain  = [1,2,NaN].includes(1);
	let isContain2 = [1,2,NaN].includes(NaN);

	console.log('number', isContain);
	console.log('number', isContain2);
}
