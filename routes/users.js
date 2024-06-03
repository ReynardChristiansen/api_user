const express = require('express');
const { createUser, getUsers, getUser, deleteUser, updateUser, loginUser } = require('../controllers/UserController');
// const authenticateToken = require('../middleware/AuthMiddleware');
const router = express.Router();

// Public routes
router.post('/login', loginUser);
router.post('/register', createUser);

// Protected routes
router.get('/',  getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id',  updateUser);

module.exports = router;