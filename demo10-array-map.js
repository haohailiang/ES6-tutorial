// array类似于map的属性
{
	for(let index of ['1','c','ks'].keys()){
		console.log('keys',index);
	}

	for(let value of ['1','c','ks'].values()){
		console.log('values',value);
	}

	for(let [index,value] of ['1','c','ks'].entries()){
		console.log('values',index,value);
	}
}
