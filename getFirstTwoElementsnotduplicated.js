var list = [5,23,23,66,5,23,7,0];


function getFirstTwoElementsnotduplicated(array) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        var count = 0;
        for (var j = 0; j < array.length; j++) {
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
