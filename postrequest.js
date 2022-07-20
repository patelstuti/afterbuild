const axios = require('axios');

const args = process.argv.slice(2);
var build = args[0];
axios
  .post('https://ptsv2.com/t/ri5dj-1658307778/post', {
    build : `${args[0]}`,
  })
  .then(res => {
    console.log(res);
    console.log(res.status);
  })
  .catch(error => {
    console.error(error);
  });
