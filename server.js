const express = require('express');

const app = express();

const port = 4000;

const apiCntrl = require("./controllers/api");
app.use('/', apiCntrl);

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})