const { swapArrayElement } = require('./utils');
const bubbleSort = (data, func) => {
let k=0;
	for (let i=data.length-1; i > 0; i--) { // let length be 5
		for(let j=0; j<i; j++) { //when i is 4, loop through 0 to 3
			func(data[j], data[j+1]) ? swapArrayElements(data, j) : false;
		}
	}
	return data;
};

const sort = (a, b) => b - a > 0;
process.stdout.write(bubbleSort([4, 5, 1, 3, 9, 0, 2, 18, 199], sort).toString());