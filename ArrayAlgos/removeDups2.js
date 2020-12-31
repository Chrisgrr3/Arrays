var removeDups2 = nums => {
    let length = nums.length;

    for (let i = length - 2; i >= 0; i--) {
        if(nums[i] == nums[i+1]) {
            for (let j = i + 1; j < length; j++) {
                nums[j - 1] = nums[j];
            }
            length--;
        }
    } 
    return length;
}