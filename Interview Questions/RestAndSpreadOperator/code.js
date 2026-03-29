// code examples of rest and spread operator

//rest operator - its used to gather all the remaining parameters of a function and they are stored in an array and can be accessed accordingly
// so the remaining numbers are combined

//array example
function sum(a, b, c, ...values) {
  console.log("Sum : ", a + b + c);
  console.log("Remaining : ", values);
}

sum(2, 3, 4, 5, 6, 7);

// Output:
//Sum :  9
// Remaining :  [ 5, 6, 7 ]

// object example
var valuesObj = {
  name: "Sahil",
  age: 27,
  hobbies: ["Gaming", "Coding"],
};

const { age, ...remain } = valuesObj;
console.log(remain);

//output: { name: 'Sahil', hobbies: [ 'Gaming', 'Coding' ] }

// what happened here was that we destructured the object , got age directly and the remaining values through the rest operator

// spread operator - we recieve a combined array and then break it to be ussed
const names = ["Sahil", "Anurag", "Aparna", "Rizon"];

function values(names1, names2, names3, names4) {
  console.log(names1, names2, names3, names4);
}

values(...names);

//OUTPUT : Sahil Anurag Aparna Rizon

// object example
var newvaluesObj = {
  ...valuesObj,
  name: "Mohd Sahil Siddiqui",
};

console.log(newvaluesObj);

//output: {
//name: 'Mohd Sahil Siddiqui',
//age: 27,
//hobbies: [ 'Gaming', 'Coding' ]
// }

//here we fetched all the values and broke it and modified it for the operation
