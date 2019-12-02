

let isacclocked = true

let userRole = 'admin'

if ( isacclocked ) {
    console.log('is locked');
} else {
    console.log('welcome');
}

if (isacclocked) {
     console.log('account is locked')
} else if (userRole == 'admin') {
     console.log('welcome admin')
}  else {
    console.log('welcome')
}

