const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data object
/*
data.location = '  Philadelphia    '
data.location = ' New York'
console.log(data)
*/

data.location = ' Philla '
data.location = ' New Y '
console.log(data)

// training in js.

class Student extends Person {
	constructor(firstName, lastName, age, grade, likes) {
		super(firstName, lastName, age, likes)
		this.grade = grade
	}
	updateGrade(change) ´
	this.grade += change
	getBio() {
		const status = this.grade >= 70 ? 'passing' : 'failing'
		return `${this.firstName} is ${status} the class`
	}
}

const me = new Student('Andrew', 'Mead', 27, 88, [])
me.fullName = 'Clancey Turner'
console.log(me.getBio())
me.updateGrade(-20)
console.log(me.getBio())

