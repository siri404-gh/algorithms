var { swapArrayElement } = require('./utils');
const bubbleSort = (data, func) => {

	for (var i=data.length-1; i > 0; i--) {
		for(var j=0; j<i; j++) {
			func(data[j], data[j+1]) ? swapArrayElement(data, j) : false;
		}
	}
	return data;
	
};

const sort = (a, b) => !(b-a > 0);
console.log(bubbleSort([4, 5, 1, 3, 9, 0, 2, 18, 199], sort));