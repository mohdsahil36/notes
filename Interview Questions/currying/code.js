// currrying is a technique in which we can convert a function taking multiple arguments into a sequence of nested functions taking a single argument
// helps to avoid sending the same argument again and again
// make the parent function a higer order function

// normal function
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3));
//OUTPUT - > 6

//currying function

function sum1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(sum1(1)(2)(3));
// OUTPUT -> 6

// REAL WORLD EXAMPLE -

let userObject = {
  name: "Mohd Sahil Siddiqui",
  age: 27,
  location: "Bengaluru",
};

function getUserDetails(obj) {
  return function (key1) {
    return function (key2) {
      return function (key3) {
        return obj[key1] + " " + obj[key2] + " " + obj[key3];
      };
    };
  };
}

const getDetails = getUserDetails(userObject);
console.log(getDetails("name")("age")("location"));
//output-> Mohd Sahil Siddiqui 27 Bengaluru

//INFINITE CURRYING-

function infiniteCurrying(a) {
  return function (b) {
    if (b !== undefined) {
      return infiniteCurrying(a + b);
    }
    return a;
  };
}

const result = infiniteCurrying(1)(2)(3)(4)(5)();
console.log(result); // 15
