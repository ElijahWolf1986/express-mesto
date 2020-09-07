const router = require('express').Router();
const { getAllCards, getCardsById } = require('../controllers/getters');

router.use('/cards/:id', getCardsById);
router.use('/cards', getAllCards);


module.exports = { router: router }
