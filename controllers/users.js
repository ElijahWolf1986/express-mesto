const User = require('../models/user');

const getAllUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500).send({ message: 'Ошибка сервера. Что-то пошло не так...' });
    });
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id)
    .orFail(() => res.status(404).send({ message: 'Такого пользователя нет!' }));
  res.status(200).send({ data: user });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    // eslint-disable-next-line consistent-return
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: 'переданы некорректные данные в методы создания пользователя!' });
      }
      return res.status(500).send({ message: 'Ошибка сервера. Что то пошло не так..' });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
