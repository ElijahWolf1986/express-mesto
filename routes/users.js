const router = require('express').Router();
const { getAllUsers, getUserById, createUser } = require('../controllers/users');

router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.get('/users', getAllUsers);

module.exports = { router };
