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

const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`;
  
  this.likes.forEach((like) => {
  	bio += `${this.firstName} likes ${like}.`
  })
  
  return bio						
  
};

Person.prototype.setName = function (fullName) {											
  const names = fullName.split(' ');
  this.firstName = names[0]
  this.lastName = names[1]
};

const me = new Person("Andrew", "Mead", 27, ['teching', 'Biking']);
me.setName("Aleis Turner");
console.log(me.getBio());

const person2 = new Person("Clancey", "Turner", 51);
console.log(person2);
