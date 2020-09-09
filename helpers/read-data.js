const fsPromises = require('fs').promises;

const getAllInfoJson = (filePath) => fsPromises.readFile(filePath, { encoding: 'utf8' })
  .then((data) => JSON.parse(data))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));

module.exports = {
  getAllInfoJson,
};
