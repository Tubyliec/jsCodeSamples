let arr = [64, 25, 12, 22, 11];

function sortByAsc(arr) {
  const NEW_ARR = [...arr];
  for (let i = 0; i < NEW_ARR.length; i += 1) {
    let minIndex = i;
    for (let j = i + 1; j < NEW_ARR.length; j += 1) {
      if (NEW_ARR[j] < NEW_ARR[minIndex]) {
        minIndex = j;
      }
    }
    const TMP = NEW_ARR[i];
    NEW_ARR[i] = NEW_ARR[minIndex];
    NEW_ARR[minIndex] = TMP;
  }

  return NEW_ARR;
}

console.log(sortByAsc(arr));
