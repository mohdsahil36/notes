let array = [1, 2, [3, 4], [5, 6, [7, 8]]];

// option 1- use flat method

console.log(array.flat(Infinity)); // flat flattens upto one level by default , use infinity to flatten across all the levels
// output:[1,2,3,4,5,6,7,8]

// option 2- if the array is of numbers only
console.log(array.toString().split(",").map(Number));
// output:[1,2,3,4,5,6,7,8]

// option 3 -using recursion

function flattenArray(array, level) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && level > 0) {
      result.push(...flattenArray(array[i], level - 1));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(flattenArray(array, 2));
// output:[1,2,3,4,5,6,7,8]
// Level 0 (root)
// │
// ├── 1
// ├── 2
// ├── [3, 4]                ← Level 1
// │     ├── 3
// │     └── 4
// │
// ├── [5, 6, [7, 8]]       ← Level 1
// │     ├── 5
// │     ├── 6
// │     └── [7, 8]         ← Level 2
// │           ├── 7
// │           └── 8
// │
// └── 0
