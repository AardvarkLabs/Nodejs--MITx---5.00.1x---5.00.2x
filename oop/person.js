// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person {
	constructor(firstName, lastName, age, position, likes) {
		super(firstNme, lastName, age, likes)
		this.position = position
	}
	getBio() {
		return `${this.firstName} ${this.lastName} is a ${this.position}.`
	} 
	getYearsLeft() {
		return 65 - this.age
	}
}

// ----- begin training code
// copying this.

/*
class Employee extends Person {
	constructor(firstName, lastName, age, position, likes) {
		super(firstName, lastName, age, likes)
		this.position = position
	}
 	getBio() {
 		return `${this.firstName} ${this.lastName} is a ${this.position}.`
 	}
	getYearsLeft() {
		return 65 - this.age
	}
}
*/

// ----- end training code


class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('Andrew', 'Mead', 27, 88, [])
console.log(me.getBio())
me.updateGrade(-20)
console.log(me.getBio())

// 
// more training 
// **** **** ***
/*

class Student extends Person {
	constructor(firstName, lastName, age, grade, likes) {
		super(firstName, lastName, age, likes)
		this.grade = grade
	}
	updateGrade(change) {
		this.grade += change
	}
	getBio() {
		const status = this.grade >= 70 ? 'passing' : 'failing'
		return `this.firstName is${sttus} the class.`
	}
}

const me = new Student('Andrew', 'Mead', 27, 88, [])
console.log(me.getBio())
me.updateGrade(-20)
console.log(me.getBio())


*/
