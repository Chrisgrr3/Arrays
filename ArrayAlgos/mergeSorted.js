const nums1 = [1,2,3];
const nums2 = [2,5,6,8];

var mergeSorted = (f,s) => {
    let newArr = [];
    fIndex = 0;
    sIndex = 0;
    while(newArr.length != f.length + s.length) {
        if(f[fIndex] < s[sIndex]) {
            newArr.push(f[fIndex]);
            fIndex++;
        } else {
            newArr.push(s[sIndex]);
            sIndex++;
        }
    }
    return newArr;
}

console.log(mergeSorted(nums1, nums2));