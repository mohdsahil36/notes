function calculate(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// we pass the function to be memoised and it returns a new function that can be used to calculate the result
function memoise(func) {
  let cache = {};

  return function (...args) {
    //...args is the rest operator that collects all the arguments into an array so we have the value which needs to be computed so we are getting 5 here as an argument
    const key = JSON.stringify(args);
    //if the key is already in the cache then we return the result from the cache
    if (key in cache) {
      console.log("From cache");
      return cache[key];
    }
    //otherwise we compute the result and store it in the cache
    const result = func.apply(this, args);
    cache[key] = result;

    console.log("Computed");
    return result;
  };
}

const memoizedCalculate = memoise(calculate);

console.time("First");
let firstResult = memoizedCalculate(5);
console.log("First:", firstResult);
console.timeEnd("First");

console.time("Second");
let secondResult = memoizedCalculate(5);
console.log("Second:", secondResult);
console.timeEnd("Second");

// for better understanding check this below-
// function multiply(a, b) {
//     return a * b;
//   }

//   const memoMul = memoise(multiply);

//   memoMul(2, 3);

// func = multiply
// args = [2, 3]
// runs → multiply(2, 3) -> 6
