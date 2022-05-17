const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { errorsLog, errorsHandler, boomErrorsHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());

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
