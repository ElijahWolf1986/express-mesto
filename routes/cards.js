const router = require('express').Router();
const { getAllCards } = require('../controllers/getters');


router.use('/cards', getAllCards);


module.exports = { router: router }