// Only use locally (Heroku provides own environmental variables)
// require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Only use locally
// app.use(logger('dev'));

app.use('/api/certificates', require('./routes/certificateRouter'));

app.get('/', (req, res) => {
  res.status(200).send('The Falcon Investments CD server is live.');
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}...`);
});
