// Find the differences from 2 strings;
//e.g. first="abc" second="abca"  the difference is a
//e.g. first="abc" second="zbaa"  the difference is za

function findDifferencesFromTwoStrings(first, second) {
  const firstArr = first.split("");
  const secondArr = second.split("");

  firstArr.forEach((elem, i) => {
    const index = secondArr.findIndex((val) => val === elem);

    if (index !== -1) {
      secondArr.splice(index, 1);
    }
  });
  return secondArr.join("");
}

const result = findDifferencesFromTwoStrings("abc", "zbaa");
console.log("🚀 ~ file: findDifferencesFromTwoStrings.js:16 ~ result:", result);
