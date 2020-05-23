/* 
const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Andrew', 'Mead', 27)
console.log(me)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2) 
*/

const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.getBio = function () {
  return `${this.firstName} is ${this.age}.`;
};

Person.prototype.setName = function (full) {
  const names = fullName.split(' ');
  this.firstName = names[0]
  this.lastName = names[1]
};

const me = new Person("Andrew", "Mead", 27);
me.setName("Aleis Turner");

console.log(me.getBio());

const person2 = new Person("Clancey", "Turner", 51);
console.log(person2);
