let name = 'andrew mead'

// length property
console.log(name.length)

// convert to upper case

console.log(name.toUpperCase())

console.log(name.toLowerCase())


let password = 'abc123sdfsfwer098'
console.log(password.includes('password'))


// trim method
console.log(name.trim())


// challenge 

// isValidPassword
let isValidPassword = function (password) {
  return (password.length > 8 && password.includes('password')) 
}
// length is more than 8 - and it doesn't contain the word password

console.log(isValidPassword('sdfsdf'))
console.log(isValidPassword('abc123sdfsdf'))
console.log(isValidPassword('sdfsdfsdswerpassword'))

