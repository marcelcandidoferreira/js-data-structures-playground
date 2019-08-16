// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5] , 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Real solution
    const arrayToReturn = [];
    let index = 0;

    while (index < array.length) {
        let newArray = [];
        for (let i = index; i < (index+size); i++) {
            if (i >= array.length) {
                break;
            }
            newArray.push(array[i])
        }
        index += size;
        arrayToReturn.push(newArray);
    }
    return arrayToReturn;

    // Easy solution using pre-built methods
    // const arrayToReturn = [];
    // let index = 0;
    
    // while (index < array.length) {
    //     arrayToReturn.push(array.slice(index, index+size));
    //     index += size;
    // }
    // return arrayToReturn;
}

module.exports = chunk;