import { arrayOfStudents } from './students.js';

// 1

class Student {
  static id = 0;
  static listOfStudents = [];
  static studentsOnBudget = [];

  constructor(enrollee) {
    this.id = Student.id++;
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
    this.addStudent(enrollee);
    this.isSelfPayment = this.checkIfSelfPayment(enrollee);
  }

  addStudent(enrollee) {
    Student.listOfStudents.push(enrollee);
  }

  checkIfSelfPayment(enrollee) {
    const listOfRatingPoints = Student.listOfStudents.map(
      (student) => student.ratingPoint
    );

    const isEligible =
      enrollee.ratingPoint >= 800 &&
      Math.min(...listOfRatingPoints) !== enrollee.ratingPoint &&
      Math.min(...Student.studentsOnBudget) <= enrollee.ratingPoint &&
      Student.studentsOnBudget.length !== 5;

    if (isEligible) {
      Student.studentsOnBudget.push(enrollee);
      console.log(Student.studentsOnBudget);

      return false;
    }

    return true;
  }
}

const studentsList = arrayOfStudents.map((student) => new Student(student));
// console.log(studentsList);

// 2

class CustomString {
  reverse(str) {
    return str.split('').reduce((prev, curr) => curr + prev, '');
  }

  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

const testString = new CustomString();
const reversed = testString.reverse('Hello');
const ucFirst = testString.ucFirst('hello hello');
const ucWords = testString.ucWords('qwerty qwerty qwerty');

// 3

class Validator {
  isEmail(str) {
    const regexp =
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

    return regexp.test(str);
  }

  isDomain(str) {
    const regexp =
      /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;

    return regexp.test(str);
  }

  isDate(str) {
    const regexp =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    return regexp.test(str);
  }

  isPhone(str) {
    const regexp =
      /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

    return regexp.test(str);
  }
}

const validator = new Validator();
const checkIfEmail = validator.isEmail('vasya.pupkin@gmail.com');
const checkIfDomain = validator.isDomain('google.com');
const checkIfDate = validator.isDate('30.11.2019');
const checkIfNumber = validator.isPhone('+38 (066) 937-99-92');
