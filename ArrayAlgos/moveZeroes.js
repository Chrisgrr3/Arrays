var moveZeroes = nums => {
    let length = nums.length;
    let nonZero = 0;
    for(let i = 0; i < length; i++) {
        if(nums[i] != 0) {
            nums[nonZero] = nums[i];
            nonZero++;
        }
    }
    for(let j = nonZero; j < length; j++) {
        nums[j] = 0;
    }
    return nums;
}

var vals = [0,1,0,3,12];
console.log(moveZeroes(vals));