const express = require('express');
const path = require('path');
const { PORT = 3000 } = process.env;
const app = express();
const usersRouter = require('./routes/users').router;
const cardsRouter = require('./routes/cards').router;
const { errorPath } = require('./routes/error-path');


app.use(express.static(path.join(__dirname, 'public')));

app.use(
  usersRouter
)

app.use(
  cardsRouter
)

app.use(
  errorPath
)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})