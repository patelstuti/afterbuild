const axios = require('axios');

axios
  .post('https://ptsv2.com/t/ri5dj-1658307778/post', {
    name : "cat",
  })
  .then(res => {
    console.log(res);
    console.log(res.status);
  })
  .catch(error => {
    console.error(error);
  });
