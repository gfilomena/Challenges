// Taking a list of numbers, filter odd numbers and sum them.

function odds_sum(list) {
    return list
       .filter((number) => number % 2 === 1)
       .reduce((a, b) => a + b, 0);
} 
