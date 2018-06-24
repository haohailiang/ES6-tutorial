// 异步编程的解决方案
// 遇到 yield和return 就停止了

{
	// genertaor基本定义
	let tell=function* (){
		yield 'a';
		yield 'b';
		return 'c'
	};

	let k=tell();

	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
	console.log(k.next());
}

{
	let obj={};

    // 可以把里边的值干干净净的打印出来
	obj[Symbol.iterator]=function* (){
		yield 1;
		yield 2;
		yield 3;
	}

	for(let value of obj){
		console.log('value',value);
	}
}

{
    // generator 适用于状态机
	let state=function* (){
		while(1){
			yield 'A';
			yield 'B';
			yield 'C';
		}
	}
	let status=state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
}

{
    // 抽奖状态机 [节省了全局变量]
	let draw = count => {
        // 具体抽奖逻辑
		console.log("还剩多少次: ", count);
	}

	let residue = function* (count) {
		while(count > 0) {
			count --;
			yield draw(count);
		}
	}

	let star = residue(5);

	$('#jLottery').click(() => star.next());
}

{
    // 长轮循
	let ajax = function* () {
		yield new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					code : 1
				})
			}, 1000)
		});
	}

	let pull = () => {
		let generator = ajax();
		let step = generator.next();
		step.value.then((d) => {
			if(d.code !== 0) {
				setTimeout(() => {
					console.log("wait...");
					pull();
				}, 1000);
			}else{
				console.log("d: ", d);
			}
		})
	}

	pull();
}
