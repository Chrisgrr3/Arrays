var prepend = (nums, val) => {
    for(let i = nums.length - 1; i >= 0; i--) {
        nums[i+1] = nums[i];
    }
    nums[0] = val;
    return nums;
}

let values = [3,5,7,8,4];
console.log(prepend(values, 9));