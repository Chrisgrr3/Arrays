var squareEvenIndex = nums => {
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 == 0) {
            nums[i]*=nums[i];
        }
    }
    return nums;
}

var vals = [1,2,3,4,5,6,7];
console.log(squareEvenIndex(vals));