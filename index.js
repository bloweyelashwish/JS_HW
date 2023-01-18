// 1
function searchCandidatesByPhoneNumber(phone) {
  const normalizedPhoneNum = (string) => string.replaceAll(/\D/g, '');
  const incomingPhoneString = normalizedPhoneNum(phone);

  return candidates.filter((c) => {
    const candidatePhone = normalizedPhoneNum(c.phone);
    return candidatePhone.includes(incomingPhoneString) || candidatePhone.startsWith(incomingPhoneString);
  });
}

const test1 = searchCandidatesByPhoneNumber('43');
// console.log(test1);
const test2 = searchCandidatesByPhoneNumber('+1(869) 40');
// console.log(test2);
const test3 = searchCandidatesByPhoneNumber('+1(869)408-39-82');
// console.log(test3);

// 2
const padDigits = (digit) => digit.toString().padStart(2, '0');

function getCandidateById(id) {
  const formatRegisteredDate = (candidate) => {
    const date = new Date(candidate.registered);
    const month = padDigits(date.getUTCMonth() + 1);
    const day = padDigits(date.getUTCDay() + 1);
    const year = date.getUTCFullYear().toString().slice(-2);
    const registered = `${day}/${month}/${year}`;

    return { ...candidate, registered };
  }

  const candidate = candidates.find(c => c._id === id);

  return candidate ? formatRegisteredDate(candidate) : undefined;
}

const test4 = getCandidateById('5e216bc9a6059760578aefa4');
// console.log(test4);

// 3
function sortCandidatesArrByBalance(order = '') {
  if (!order) {
    return candidates;
  }

  const normalizedBalance = (string) => string.replaceAll(/\D/g, '');

  const inAscendingOrder = () => [...candidates].sort((c1, c2) => normalizedBalance(c1.balance) - normalizedBalance(c2.balance));
  const inDescendingOrder = () => [...candidates].sort((c1, c2) => normalizedBalance(c2.balance) - normalizedBalance(c1.balance));

  switch (order) {
    case 'asc':
      return inAscendingOrder();
    case 'desc':
      return inDescendingOrder();
    default:
      return candidates;
  }
}

// console.log(sortCandidatesArrByBalance('asc'));
// console.log(sortCandidatesArrByBalance('desc'));
// console.log(sortCandidatesArrByBalance());

// 4

function getEyeColorMap() {
  const map = new Map();

  for (const candidate of candidates) {
    const candidatesByEyeColor = map.get(candidate.eyeColor) || [];

    map.set(candidate.eyeColor, [ ...candidatesByEyeColor, candidate ]);
  }

  return map;
}

const eyeColorMap = getEyeColorMap();
console.log(eyeColorMap);
