function checkEmpty() {
	console.error('参数不能为空!');
}

function log(msg = checkEmpty()) {
	console.log(msg);
}

log();
log('运行成功');