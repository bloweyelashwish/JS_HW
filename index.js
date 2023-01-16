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
function insertIntoArray(arr, obj, id) {
  const requestedObj = arr.find((obj) => obj.id ?? obj._id === id);
  const idxOfRequestObj = arr.indexOf(requestedObj);

  return [...arr.slice(0, idxOfRequestObj), obj, ...arr.slice(idxOfRequestObj)];
}

const obj = {
  id: 3,
  name: 'Vasya'
}

const secondObj = {
  id: 4,
  name: 'Katya'
}

// const updatedArr = insertIntoArray(candidates, obj, '5e216bc9f51c08c39c3ed006');
// console.log(insertIntoArray(updatedArr, secondObj, '5e216bc9a6059760578aefa4'));

// 5
class Candidate {
  constructor(person) {
      this.state = this.getState(person.address);
  }

  getState(address) {
    return address.split(', ')[2];
  }
}

const candidate = new Candidate(candidates[0]);
console.log(candidate.state);

// 6

function getCompanyNames(candidates) {
  const companiesArr = candidates.map((candidate) => candidate.company);

  return [...new Set(companiesArr)];
}

const companyNames = getCompanyNames(candidates);

// 7
function getUsersByYear(users, year) {
  const registeredDate = (string) => string.split('-')[0];

  return users.filter((user) => registeredDate(user.registered) === year.toString());
}

const usersByYear = getUsersByYear(candidates, 2017);
// console.log(usersByYear);

// 8
function getCandidatesByUnreadMsgs(candidates, msgsCount) {
  const numFromString = (string) => string.replace(/\D/g,'');

  return candidates.filter((candidate) => numFromString(candidate.greeting) === msgsCount.toString());
}

const candidatesWithUnreadMsgs = getCandidatesByUnreadMsgs(candidates, 8);
// console.log(candidatesWithUnreadMsgs);

// 9
function getCandidatesByGender(candidates, gender) {
  return candidates.filter((candidate) => candidate.gender === gender);
}

const maleCandidates = getCandidatesByGender(candidates, 'male');
// console.log(maleCandidates);

// 10
function reduce(callback, initialValue) {
  let accumulator = initialValue ? initialValue : this[0];
  let start = initialValue ? 0 : 1;

  for (; start < this.length; start++) {
    accumulator = callback(accumulator, this[start]);
  }

  return accumulator;
}

Array.prototype._reducer = reduce;

const test = [1, 2, 3];
const res = test._reducer((sum, curr) => sum + curr, 2000);
// console.log(res);

// 11

function join(separator) {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    result += this[i];

    if (i !== this.length - 1) {
      result += separator;
    }
  }

  return result;
}

Array.prototype._joiner = join;

const testJoin = ['Test', 'String', 'There'].join('!');
console.log(testJoin);
