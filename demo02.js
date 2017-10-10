let [a, b] = [3, 8, 10];
let [x, y, z] = 'vue';
console.log(`a:${a}, b:${b}, x:${x}, y:${y}, z:${z}`);//a:3, b:8, x:v, y:u, z:e

let {key1, key2} = {key1:10, key2:20};
console.log(`key1:${key1}, key2:${key2}`);//key1:10, key2:20

function sum([a, b]){
	return a + b;
}
console.log(`sum: ${sum([1,2])}`);//sum: 3