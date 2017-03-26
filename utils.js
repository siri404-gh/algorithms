const swapArrayElements = (data, i) => { //swaps the element i and i+1
	var temp = data[i];
	data[i] = data[i+1];
	data[i+1] = temp;
};

module.exports = {swapArrayElements};
