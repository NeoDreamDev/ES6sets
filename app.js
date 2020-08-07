// SETS - Store Unique Values Of Any Type

const set1 = new Set();

// Add Values To Set
set1.add(100);
set1.add("A String");
set1.add({ name: "Salaam" });
set1.add(true);
set1.add(100); //wont reuse, because it has to be a unique value

// const set2 = new Set([1, true, "String"]);
// console.log(set2);
// console.log(set1);

// Get Count
// console.log(set1.size);

// Check for Values
// console.log(set1.has(100));
// console.log(set1.has(60 + 40));
// console.log(set1.has({ name: "Salaam" }));

// Delete From Set
// set1.delete(100);

// console.log(set1);

// ITERATE THROUGH SETS
// For..of
// for (let item of set1) {
//   console.log(item);
// }

// ForEach Loop
// set1.forEach((value) => {
//   console.log(value);
// });

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);

console.log(setArr);
