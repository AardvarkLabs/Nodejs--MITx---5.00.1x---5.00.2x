setTimeout(() => {
     console.log('two seconds are up')
}, 2000) 



const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((names) => {
    return name.length <= 4
})

const geoCode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }
    return data
}

const data = geoCode('Santiago')
console.log(data)