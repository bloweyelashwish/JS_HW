// 1
const counterClosure = () => {
  let initialValue = 0;

  return (arg) => {
    initialValue += arg;
    return initialValue;
  };
}

const counter = counterClosure();
// console.log(counter(3));
// console.log(counter(5));
// console.log(counter(10));


// 2

function updateArray() {
  let arr = [];

  return (arg) => {
    if (!arg) {
      arr = [];
      return arr;
    }

    arr.push(arg);
    return arr;
  }
}

const getUpdatedArr = updateArray();
// console.log(getUpdatedArr(3));
// console.log(getUpdatedArr(5));
// console.log(getUpdatedArr({name: 'Vasya'}));
// console.log(getUpdatedArr());
// console.log(getUpdatedArr(4));

// 3

const timerClosure = () => {
  let lastDate = null;

  return () => {
    if (!lastDate) {
      lastDate = new Date();
      return 'Enabled';
    }

    const now = new Date();
    const difference = Math.round((now - lastDate) / 1000);
    lastDate = now;

    return difference;
  };
}

const getTime = timerClosure();

// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => console.log(getTime()), i * 1000);
// }

// 4

function padString(value) {
  return value.toString().padStart(2, '0');
}

const timeConverter = (seconds) => {
  const MM = Math.floor(seconds / 60);
  const SS = seconds % 60;

  return `${padString(MM)}:${padString(SS)}`;
}

const timer = (seconds) => {
  let countdownTime = seconds;

  const tick = setInterval(() => {
    if (countdownTime > 0) {
      console.log(timeConverter(countdownTime));
      countdownTime--;
    } else {
      clearInterval(tick);
      console.log('Finished');
    }
  }, 1000);
}

timer(15);


