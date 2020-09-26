const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();
const usersRouter = require('./routes/users').router;
const cardsRouter = require('./routes/cards').router;
const { errorPath } = require('./routes/error-path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5f6f6dcc85a8dde442350249',
  };

  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  usersRouter,
);

app.use(
  cardsRouter,
);

app.use(
  errorPath,
);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
