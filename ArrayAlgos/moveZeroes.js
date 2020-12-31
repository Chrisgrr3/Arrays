var moveZeroes = nums => {
    let length = nums.length;
    let zeroes = 0;
    for(let i = 0; i < length; i++) {
        if(nums[i] == 0) {
            zeroes++;
            for(let j = i + 1; j < length - zeroes; j++) {
                nums[j-1] = nums[j];
            }
            nums.push(0);
        }
    }
    return nums;
}

var vals = [0,1,0,3,12];
console.log(moveZeroes(vals));