var sortedSquares = nums => {
    var newArr = [];
    for(let i = 0; i < nums.length; i++) {
        newArr.push(nums[i]**2);
    }
    newArr.sort(function(a, b){return a - b});
    return newArr;
}

let numbers = [-4,-1,0,3,10];
console.log(sortedSquares(numbers));