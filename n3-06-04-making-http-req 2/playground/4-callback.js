setTimeout(() => {
     console.log('two seconds are up')
}, 2000) 



const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((names) => {
    return name.length <= 4
})

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)

    }, 2000)
}

geoCode('Santiago', (data) => {
    console.log(data)
})
