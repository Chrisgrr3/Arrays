function twoNumberSum(array, targetSum) {
    let numTable = {};
    let num;
	for(let i = 0; i < array.length; i++) {
        num = array[i];
        if(targetSum - num in numTable) {
            return [targetSum - num, num];
        }
        else {
            numTable[num] = true;
        }
    }
    return "The given array does not contain two values that add up to " + targetSum + ".";
}
