//Sum all numbers included in nested arrays.

function SumNestedArrays(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? SumNestedArrays(toFlatten) : toFlatten);
  }, []).reduce( (a,b) => a + b, 0);
}

const input = [[2, 2], [1,[2,1]], [2, [2,[1,[1]]], 1]];
const sum = SumNestedArrays(input);
console.log(sum);
