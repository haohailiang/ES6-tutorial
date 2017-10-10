function checkLogin(){
	return new Promise((resolve, reject) => {
		let randomNum = ~~(Math.random()*10);
		let flag = (randomNum%2) === 0 ? true:false
		if(flag){
			resolve({
				code:0,
				msg:'偶数',
				num:randomNum
			});
		}else{
			reject({
				code:1,
				msg:'奇数',
				num:randomNum
			});
		}
	});
}

checkLogin().then(res => {
	if(res.code == 0){
		console.log(`随机数:${res.num}, 随机结果1:${res.msg}`);
	}
}).catch(err => {
	console.log(`随机数:${err.num}, 错误结果1:${err.msg}`);
});

checkLogin().then(res => {
	if(res.code == 0){
		console.log(`随机数:${res.num}, 随机结果2:${res.msg}`);
	}
}, err => {
	console.log(`随机数:${err.num}, 错误结果2:${err.msg}`);
});