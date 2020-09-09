const router = require('express').Router();
const { getAllCards } = require('../controllers/getters');

router.get('/cards', getAllCards);

module.exports = { router };
