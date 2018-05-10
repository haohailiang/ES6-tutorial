function checkLogin(){
	return new Promise((resolve, reject) => {
		let randomNum = ~~(Math.random()*10);
		setTimeout(()=>{
			resolve();
			console.log('执行完毕' + (+new Date));
		}, 1000 * randomNum);
	});
}

//2次都成功时输出结果
Promise.all([checkLogin(), checkLogin()]).then(res => {
	console.log('执行完毕' + (+new Date));
});