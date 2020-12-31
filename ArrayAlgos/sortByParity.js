var sortByParity = nums => {
    let length = nums.length;
    let evenIndex = 0;
    let newArr = [];
    for(let i = 0; i < length; i++) {
        if(nums[i]%2 == 0) {
            newArr[evenIndex] = nums[i];
            evenIndex++;
        }
    }
    let oddIndex = evenIndex;
    for (let j = 0; j < length; j++) {
        if(nums[j]%2 != 0) {
            newArr[oddIndex] = nums[j];
            oddIndex++;
        }
    }
    return newArr;
}

var nums = [3,1,2,4];
console.log(sortByParity(nums));
