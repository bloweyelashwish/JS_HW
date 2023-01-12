import { candidates } from './candidates';

console.log(candidates);

// 1
function removeUserByIdx(arr, idx) {
  return arr.splice(idx, 1);
}

const arr = ['Vasya', 'Petya', 'Alexey'];
// removeUserByIdx(arr, 1);

// 2
function getAllKeys(obj) {
  return Object.keys(obj);
}

// 3
function getAllValues(obj) {
  return Object.values(obj);
}

const person = { name: 'Vasya', age: 1 };
// console.log(getAllKeys(person));
// console.log(getAllValues(person));

// 4