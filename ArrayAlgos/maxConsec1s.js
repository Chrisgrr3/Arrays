// Given a binary array, find the maximum number of consecutive 1s in this array.
let vals = [1,1,0,1,1,1];


var findMaxConsecutiveOnes = (nums) => {
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++;
        }
        if (nums[i+1] != 1) {
            if (count > max) {
                max = count;
                count = 0;
            } else {
                count = 0;
            }
        }
    }
    return max;
}

console.log(findMaxConsecutiveOnes(vals));