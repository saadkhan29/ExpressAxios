const router = require('express').Router();
const axios = require('axios');

router.get('/', (req, res) => {
  axios({
    method: 'get',
    url: "http://www.omdbapi.com/?apikey=3a531bfd&s=stargate"
  })
  .then((response) => {
    // console.log(res.data.Search);
    res.render('../views/api.ejs', {data: response.data.Search})
  })
  .catch((err) => {
    console.log(err);
  })
})


module.exports = router;