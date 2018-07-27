// Object对象的增删改查
// 优先使用 Map和Set
// 放弃使用 Object和Array

{
    // add
	let obj = [];
	obj['t'] = 1;

	console.log("obj: ", obj);
}

{
    // delete
	let obj = {'t' : 1};
	delete obj['t'];

	console.log("obj: ", obj);
}

{
    // update
	let obj = {'t' : 1};
	obj['t'] = 2;

	console.log("obj: ", obj);
}

{
    // find
	let obj = {'t' : 1};
	let objBoolean = 't' in obj;

	console.log("todo: ", objBoolean);
}

{
	console.group('--------------  object 动态key --------------');
	let t = 'a';

	let obj = {
		[t] : 2
	}

	console.log( obj );
	console.groupEnd();
}
