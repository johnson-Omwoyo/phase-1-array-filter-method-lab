// Code your solution here
let drivers = [
  { name: "koisan", age: 32 },
  { name: "kaisa", age: 29 },
  { name: "kaisa", age: 39 },
];
let findMatching = (arr, str) => {
  return arr.filter((arrr) => arrr.toLowerCase() === str.toLowerCase());
};
function fuzzyMatch(arr, str) {
  return arr.filter(
    (arrr) => arrr.toLowerCase().indexOf(str.toLowerCase()) === 0
  );
}

function matchName(arr, str) {
  return arr.filter((record) => record.name === str);
}
