const Card = require('../models/card');

const getAllCards = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch(() => {
      res.status(500).send({ message: 'Что-то пошло не так...' });
    });
};

const createCard = (req, res) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') return res.status(400).send({ message: 'переданы некорректные данные в методы создания пользователя!' });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch(() => {
      res.status(500).send({ message: 'Что-то пошло не так...' });
    });
};

module.exports = {
  getAllCards,
  createCard,
  deleteCard,
};
