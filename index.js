1;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log('index: ', i, 'Fiz');
  } else if (i % 3 === 0) {
    console.log('index: ', i, 'FizBuz');
  } else {
    console.log('index: ', i, 'Buz');
  }
}

2;

const factorial = (num) => {
  if (num === 0) return 0;

  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
};

console.log('factorial: ', factorial(10));

3;

const calculatePaperStackNum = (
  sheetsInStack,
  weeklyConsumption,
  weekCount
) => {
  const consumptionPerWeeks = weekCount * weeklyConsumption;
  let requiredNumOfStacks = consumptionPerWeeks / sheetsInStack;

  if (requiredNumOfStacks % 1 !== 0) {
    requiredNumOfStacks = (requiredNumOfStacks >> 0) + 1;
  }

  return requiredNumOfStacks;
};

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

console.log(
  'required paper stack num: ',
  calculatePaperStackNum(sheetsInReamPaper, consumptionPerWeek, weeksAmount)
);

4;

function locateRoom(room, roomsOnFloor, floors) {
  const roomsPerPorch = floors * roomsOnFloor;

  const start = room - 1;
  const porch = (start / roomsPerPorch + 1) << 0;
  const floor = ((start - (porch - 1) * roomsPerPorch) / roomsOnFloor + 1) << 0;

  return { porch, floor };
}

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;

console.log(
  "room's porch and floor: ",
  locateRoom(roomNumber, roomsOnFloor, floors)
);

// 5

const pyramid = (medianNumber) => {
  let resultingString = '';

  for (let row = 1; row <= medianNumber; row++) {
    for (let spaceLeft = row; spaceLeft < medianNumber; spaceLeft++) {
      resultingString += '-';
    }

    for (
      let buildingBlockLeft = 1;
      buildingBlockLeft <= row;
      buildingBlockLeft++
    ) {
      resultingString += '#';
    }

    for (
      let buildingBlockRight = 1;
      buildingBlockRight < row;
      buildingBlockRight++
    ) {
      resultingString += '#';
    }

    for (let spaceRight = medianNumber; spaceRight > row; spaceRight--) {
      resultingString += '-';
    }

    resultingString += '\n';
  }

  console.log('pyramid from median', medianNumber);
  return resultingString;
};

console.log(pyramid(6));
console.log(pyramid(8));
