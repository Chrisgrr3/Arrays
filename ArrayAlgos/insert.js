var insert = (nums, index, value) => {
    for(let i = nums.length - 1; i >= 0; i--) {
        nums[i+1] = nums[i];
        if(i == index) {
            nums[i] = value;
            break;
        }
    }
    return nums;
}

let vals = [3,5,7,1,6,2];
console.log(insert(vals,2,9));
