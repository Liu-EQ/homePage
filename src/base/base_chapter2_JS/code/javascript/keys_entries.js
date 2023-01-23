const array1 = ["1", "b"];
console.log("test-keys", array1.keys());
for (let index of ["a", "b"].keys()) {
  console.log(index);
}
for (let [index, elem] of ["a", "b"].entries()) {
  console.log(index, elem);
}
