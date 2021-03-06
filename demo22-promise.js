{
	// 所有图片都加载完成后, 同时显示到桌面
	function loadImg(src) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function() {
				reject(err);
			}
		});
	}

	function showImg(imgs) {
		imgs.forEach(item => {
			document.body.appendChild(item);
		})
	}

	Promise.all([
		loadImg('http://www.bmw.com.cn/content/dam/bmw/marketCN/common/HomepageTeaser/Medium/2018/find.jpg/_jcr_content/renditions/cq5dam.resized.img.585.low.time1518076034475.jpg'),
		loadImg('http://www.bmw.com.cn/content/dam/bmw/marketCN/common/HomepageTeaser/Medium/2018/calculator.jpg/_jcr_content/renditions/cq5dam.resized.img.585.low.time1518076035208.jpg'),
		loadImg('http://www.bmw.com.cn/content/dam/bmw/marketCN/common/HomepageTeaser/Medium/2018/training.jpg/_jcr_content/renditions/cq5dam.resized.img.585.low.time1518076033884.jpg')
	]).then(showImg);
}

{
	function race(time) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log( `${time} S - all` );
				resolve(time);
			}, time)
		})
	}

	Promise.all([
		race(2000),
		race(1000),
		race(3000),
		race(4000)
	]).then(time => {
		console.log( ...time );
	});

}

{
	function race(time) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log( `${time} S - race` );
				resolve(time);
			}, time)
		})
	}

	Promise.race([
		race(2000),
		race(1000),
		race(3000),
		race(4000)
	]).then(time => {
		console.log( time );
	});
}

{
	// Promse循环
	function race(time) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log( `${time} S - all` );
				resolve(time);
			}, time)
		})
	}

	let loop;

	if(loop === undefined) {
		race(2000).
	}

}
