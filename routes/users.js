const router = require('express').Router();
const { getAllUsers, getUserById } = require('../controllers/getters');

router.get('/users/:id', getUserById);
router.get('/users', getAllUsers);

module.exports = { router };
