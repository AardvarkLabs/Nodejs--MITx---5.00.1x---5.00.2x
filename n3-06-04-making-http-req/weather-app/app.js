const request = require('request')

const url = 'https://api.darksky.net/forecast/ecd099679a492007358d1ba36b664ebe/37.8267,-122.4233'

/* request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
}) */

request ({url: url, json: true}, (error, response) => {
    /* const data = JSON.parse(response.body) */
   /*  console.log(response.body.currently) */
   console.log(`it is currently${response.currently.temperature}`)
})