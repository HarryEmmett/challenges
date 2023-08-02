// Create a function that accepts and array. Given an n x n array, 
// return the array elements arranged from outermost elements to the middle element, traveling clockwise.
function snailArray(array) {
    let u = array;
    let res = [];

    res.push(...u[0]);
    u.splice(u[0], 1);

    while (u[0]?.length > 1) {

        for (let i = 0; i < u.length; i++) {
            res.push(u[i][u.length]);
            u[i].splice(u.length, 1);
        }

        res.push(...u[u.length - 1].reverse());
        u.splice(u.length - 1, 1);

        for (let i = u.length - 1; i >= 0; i--) {
            res.push(u[i][0]);
            u[i].splice(0, 1);
        }

        if (u[0]) {
            res.push(...u[0]);
            u.splice(u[0], 1);
        }
    }

    return res;
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