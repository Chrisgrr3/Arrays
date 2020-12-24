var findNumbers = (nums) => {
    let evens = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i].toString().length % 2 == 0) {
            evens++;
        }
    }
    return evens;
}

let numbers = [12,345,2,6,7896];
console.log(findNumbers(numbers));