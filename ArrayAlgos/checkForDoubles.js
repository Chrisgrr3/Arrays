var checkForDoubles = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[i]*2 == arr[j] && i != j) {
                return true;
            }
        }
    }
    return false;
}

let vals = [-2,0,10,-19,4,6,-8];
console.log(checkForDoubles(vals));