const express = require('express');
const routerApi = require('./routes');

const { errorsLog, errorsHandler, boomErrorsHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from my server.');
})

app.get('/new-endpoint', (req, res) => {
  res.send('Hello, I am a new end point.');
})

routerApi(app);

app.use(errorsLog);
app.use(boomErrorsHandler);
app.use(errorsHandler);

app.listen(port, () => {
  console.log('Port: ', port);
})
