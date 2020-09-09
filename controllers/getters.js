const path = require('path');
const { getAllInfoJson } = require('../helpers/read-data');

const getAllUsers = (req, res) => getAllInfoJson(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      res
        .status(500)
        .send('Data has not been selected, sorry');
      return;
    }
    res
      .status(200)
      .send(data);
  });

const getAllCards = (req, res) => getAllInfoJson(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    if (!data) {
      res
        .status(500)
        .send('Data has not been selected, sorry');
      return;
    }
    res
      .status(200)
      .send(data);
  });

const getUserById = async (req, res) => {
  try {
    const data = await getAllInfoJson(path.join(__dirname, '..', 'data', 'users.json'));
    if (!data) {
      throw new Error('Data has not been received, sorry');
    }
    const foundUser = data.find((u) => u._id === req.params.id);
    if (!foundUser) {
      res
        .status(404)
        .send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res
      .status(200)
      .send(foundUser);
  } catch (err) {
    res
      .status(500)
      .send('Something goes wrong ;(');
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  getAllCards,
};
