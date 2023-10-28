const chunkArray = (arr, len) => {
    // Init chunk array
    const chunkedArr = [];

    // loop through arr
    arr.forEach(val => {
        // get last element
        const last = chunkedArr[chunkedArr.length - 1];

        // check if last and if last lenght is equal to the chunk len
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        }
        else {
            last.push(val);
        }
    });

    return chunkedArr;
}

module.exports = chunkArray;