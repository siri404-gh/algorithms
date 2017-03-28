const bubbleSort = (data, func) => {
	for (let i=data.length-1; i > 0; i--) { // let length be 5
		for(let j=0; j<i; j++) { //when i is 4, loop through 0 to 3
			if(func(data[j], data[j+1])) {
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            };
		}
	}
	return data;
};

const sort = (a, b) => b - a < 0;
process.stdout.write(bubbleSort([4,1,5,2,3], sort).toString() + '\n');