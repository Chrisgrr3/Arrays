function checkSubseq(array, sequence) {
    let index = 0;
    let num;
    for(let i = 0; i < array.length; i++) {
        num = array[i];
        if(num == sequence[index]) {
            index++;
        }
    }
    return index === sequence.length;
}