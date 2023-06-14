// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person prototype method
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Employee prototype method
Employee.prototype.jobGreet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Example usage
const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John, I am 30 years old.

const jane = new Employee("Jane", 25, "Manager");
jane.greet(); // Output: Hello, my name is Jane, I am 25 years old.
jane.jobGreet(); // Output: Hello, my name is Jane, I am 25 years old, and my job title is Manager.


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
