import { employees } from './employees.js';

// 1

function Employee({
  id,
  name,
  surname,
  salary,
  workExperience,
  isPrivileges,
  gender,
}) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.salary = salary;
  this.workExperience = workExperience;
  this.isPrivileges = isPrivileges;
  this.gender = gender;

  Object.defineProperties(this, {
    fullInfo: {
      get: function () {
        let res = new String();
        const propsLength = Object.keys(this).length - 1;

        Object.entries(this).forEach(([k, v], i) => {
          res += `${k} - ${v}, `;

          if (i === propsLength) {
            res += `${k} - ${v}.`;
          }
        });

        return res;
      },

      set: function (v) {
        Object.keys(this).forEach((k) => {
          this[k] = v[k] ? v[k] : this[k];
        });

        return this;
      },
    },
  });
}

// 2

Employee.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
};

const employeeObj = new Employee(employees[0]);
console.log(employeeObj);
console.log(employeeObj.getFullName());

// 3

const employeesFromArray = (arr) => arr.map((item) => new Employee(item));
const employeeConstructArr = employeesFromArray(employees);
console.log(employeeConstructArr);

// 4

const getFullNamesFromArr = (arr) => arr.map((item) => item.getFullName());
const arrOfFullNames = getFullNamesFromArr(employeeConstructArr);
console.log(arrOfFullNames);

// 5

const getAverageSalary = (arr) =>
  parseInt(arr.reduce((prev, curr) => prev + curr.salary, 0) / arr.length);

const averageSalary = getAverageSalary(employeeConstructArr);
console.log(averageSalary);

// 6

const getRandomEmployee = (arr) => arr[(Math.random() * arr.length) | 0];

const randomEmployee = getRandomEmployee(employeeConstructArr);
console.log(randomEmployee);

// 7

const info = employeeObj.fullInfo;
console.log(info);

employeeObj.fullInfo = { name: 'Вася', salary: 9000 };
console.log(employeeObj);
