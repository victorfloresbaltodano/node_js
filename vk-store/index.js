const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my server.');
})

app.listen(port, () => {
  console.log('Port: ', port);
})
