const User = require('../models/user');

const getAllUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500).send({ message: 'Что-то пошло не так...' });
    });
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') return res.status(404).send({ message: 'пользователь не найден!' });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.status(400).send({ message: 'переданы некорректные данные в методы создания пользователя!' });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

//5f6f660b3ca10ae2b08d9e96