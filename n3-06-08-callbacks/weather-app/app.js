const request = require('request')

// const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-112'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
//     }
// })

const geocodeURL = 'https://api.darksky.net/forecast/ecd099679a492007358d1ba36b664ebe/37.8267,-122.4233'

request({ url: geocodeURL, json: true }, (error, response) => {
    console.log(response.body)
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
   //  } else if (response.body.error) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})