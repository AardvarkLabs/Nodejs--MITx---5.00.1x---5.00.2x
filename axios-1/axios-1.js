const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/earth/imagery')
  .then(response => {
    // console.log(response.data.url);
    console.log(response.data.cloud_score);
  })
  .catch(error => {
    console.log(error);
  });