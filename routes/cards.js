const router = require('express').Router();
const { getAllCards, createCard, deleteCard } = require('../controllers/cards');

router.get('/cards', getAllCards);
router.post('/cards', createCard);
router.delete('/cards/:cardId', deleteCard);

module.exports = { router };
