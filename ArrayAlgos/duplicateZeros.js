var duplicateZeros = (nums) => {
    let possibles = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            possibles++;
        }
    }
    for(let i = nums.length-1; i >= 0 ; i--) {
        if(nums[i] == 0) {
            nums[i+1] = 0;
        } else {
            nums[i + possibles] = nums[i];
        }
    }
}

var arr = [0,9,7,8,0,1,0,0];

duplicateZeros(arr);
console.log(arr);


