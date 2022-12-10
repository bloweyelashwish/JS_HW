// 1

const logCityAndCountry = (object) => {
  const result = [];

  for (const [key, val] of Object.entries(object)) {
    result.push(`${key} - is ${val}`);
  }

  return result;
};

const citiesAndCountries = {
  Киев: 'Украина',
  'Нью-Йорк': 'США',
  Амстердам: 'Нидерланды',
  Берлин: 'Германия',
  Париж: 'Франция',
  Лиссабон: 'Португалия',
  Вена: 'Австрия',
};

console.log('log city and country: ', logCityAndCountry(citiesAndCountries));

// 2

const getArray = (amount) => {
  const DELIMETER = 3;

  if (amount % DELIMETER !== 0)
    throw new Error('Amount must be a multiple of 3');

  const result = [];
  let arr = [];

  for (let i = 1; i <= amount; i++) {
    arr.push(i);

    if (i % DELIMETER === 0) {
      result.push(arr);
      arr = [];
    }
  }

  return result;
};

console.log('print array of arrays with a given amount: ', getArray(12));

// 3

const getNameOfDay = (lang, day) => {
  const namesOfDays = {
    ru: [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ],
    en: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  };

  if (!namesOfDays[lang])
    throw new Error(
      `Given language is not provided: ${lang}. Possible values are: ru, en`
    );

  return namesOfDays[lang][day - 1];
};

console.log('get name of day in given language:', getNameOfDay('en', 3));

// 4

const sumOfTwoLowestNums = (arr) => {
  // SOLUTION: 1
  // const [num1, num2] = arr.sort((a, b) => a - b);
  // return num1 + num2;

  // SOLUTION 2
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (arr[i] < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  const sum = min1 + min2;

  return `Lowest possible sum of [${arr}]: ${sum}`;
};

console.log(sumOfTwoLowestNums([10, 800, 3453000, 8010]));

console.log(sumOfTwoLowestNums([12, 898, 899, 900]));

// 5

const sumOfBinary = (arr) => {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res *= 2;
    res += arr[i];
  }

  return res;
};

console.log(sumOfBinary([0, 0, 0, 1]));
console.log(sumOfBinary([0, 0, 1, 0]));
console.log(sumOfBinary([1, 0, 0, 1]));
console.log(sumOfBinary([0, 1, 1, 0]));
console.log(sumOfBinary([1, 1, 1, 1]));
console.log(sumOfBinary([1, 0, 1, 1]));
console.log(sumOfBinary([1, 0, 1, 0, 1]));
console.log(sumOfBinary([1, 1, 1, 0, 0, 1]));
