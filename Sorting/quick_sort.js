arr = [-2, 9, 5, -3, 12, 98, 15, -23, -37, 25, 16];
let firstArray = arrayGenerator(100);

function arrayGenerator(len) {
  return Array.from({ length: len }, (v, i) => i).sort(function (a, b) {
    return b - a;
  });
}

console.log(arrayGenerator(100));

// First

function quickSorting(arr) {
  if (arr.length <= 2) {
    return arr;
  }
  const BASE_INDEX = Math.floor(arr.length / 2);
  const BASE_ITEM = arr[BASE_INDEX];
  const GREATER_ITEMS = [];
  const LESS_ITEMS = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < BASE_ITEM && i !== BASE_INDEX) {
      LESS_ITEMS.push(arr[i]);
    }
    if (arr[i] > BASE_ITEM && i !== BASE_INDEX) {
      GREATER_ITEMS.push(arr[i]);
    }
  }
  return [...sortByAsc(LESS_ITEMS), BASE_ITEM, ...sortByAsc(GREATER_ITEMS)];
}

// Second

function sortByAsc(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const NEW_ARRAY = arr;
  const LESS_ARRAY = [];
  const GREATER_ARRAY = [];
  const BASE_ITEM = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > BASE_ITEM) {
      GREATER_ARRAY[GREATER_ARRAY.length] = arr[i];
    } else {
      LESS_ARRAY[LESS_ARRAY.length] = arr[i];
    }
  }

  const SORTED_ARRAY = [
    ...sortByAsc(LESS_ARRAY),
    BASE_ITEM,
    ...sortByAsc(GREATER_ARRAY),
  ];

  for (let i = 0; i < arr.length; i += 1) {
    NEW_ARRAY[i] = SORTED_ARRAY[i];
  }
  return NEW_ARRAY;
}

console.log(quickSorting(firstArray));
console.log(sortByAsc(firstArray));
