var mountainArr = arr => {
    if(arr.length >= 3) {
        let peak = false;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] <= arr[i-1]) {
                return false;
            }
            if(arr[i+1] < arr[i] && i != 0) {
                peak = i;
                break;
            }
        }
        if(peak === false) {
            return false;
        }
        else {
            for(let j = peak + 1; j < arr.length; j++) {
                if(arr[j] >= arr[j-1]) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

let nums = [9,8,7,6,5,4,3,2,1,0];
console.log(mountainArr(nums));