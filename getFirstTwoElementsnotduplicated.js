var list = [5,23,23,66,5,23,7,0];

function getFirstTwoElementsnotduplicated(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if(item == array[j]) count++;
        }
        if(count == 1){
            result.push(item);
        }
        if(result.length == 2) {
            break; 
        }
    }
    return result;
}


var r =  getFirstTwoElementsnotduplicated(list);
console.log(r)
