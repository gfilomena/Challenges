// Implement a function that calculate the power of a number without the auxuiliary of moltiplication and division.

function pow(num,exp) {
  
  var add = exp;
  var result = 0;
  while(exp > 1) {
    result = 0;
    for(var i = 0; i < num; i++) {
       result += add;
    }
    add = result;
    exp--;
  }
   return result;
}   

var result = pow(2,10);

console.log(result);
