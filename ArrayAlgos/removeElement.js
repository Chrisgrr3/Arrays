var removeElement = (nums, val) => {
    let length = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != val) {
            nums[length] = nums[i];
            length++;
        }
    }
    return length;
}

let values = [0,1,2,2,3,0,4,2];
removeElement(values, 2);
console.log(values);
