// Create a function that accepts and array. Given an n x n array, 
// return the array elements arranged from outermost elements to the middle element, traveling clockwise.
function snailArray(array) {
    let originalArray = array;
    let returnArray = [];

    returnArray.push(...originalArray[0]);
    originalArray.splice(originalArray[0], 1);

    while (originalArray[0]?.length > 1) {

        for (let i = 0; i < originalArray.length; i++) {
            returnArray.push(originalArray[i][originalArray.length]);
            originalArray[i].splice(originalArray.length, 1);
        }

        returnArray.push(...originalArray[originalArray.length - 1].reverse());
        originalArray.splice(originalArray.length - 1, 1);

        for (let i = originalArray.length - 1; i >= 0; i--) {
            returnArray.push(originalArray[i][0]);
            originalArray[i].splice(0, 1);
        }

        if (originalArray[0]) {
            returnArray.push(...originalArray[0]);
            originalArray.splice(originalArray[0], 1);
        }
    }

    return returnArray;
}

console.log(
    snailArray(
        [
            [1, 2, 3, 4, 5, 6],
            [20, 21, 22, 23, 24, 7],
            [19, 32, 33, 34, 25, 8],
            [18, 31, 36, 35, 26, 9],
            [17, 30, 29, 28, 27, 10],
            [16, 15, 14, 13, 12, 11]
        ]
    )
);

console.log(
    snailArray(
        [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]
        ]
    )
);

console.log(
    snailArray(
        [
            [1]
        ]
    )
)