const insertionSort = (data, func) => {
    for (var i=1; i< data.length; i++) {
        for(var j=0; j < i; j++) {
           if(func(data[i], data[j])) {
               let temp = data[i];
               data[i] = data[j];
               data[j] = temp;
           }
        }
    }
    return data;
};

const sort = (a, b) => a - b < 0;
process.stdout.write(insertionSort([4,1,5,2,3], sort).toString() + '\n');
