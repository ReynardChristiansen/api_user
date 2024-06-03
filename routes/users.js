const express = require('express');
const { createUser, getUsers, getUser, deleteUser, updateUser, loginUser } = require('../controllers/UserController');
const authenticateToken = require('../middleware/AuthMiddleware');
const router = express.Router();

// Public routes
router.post('/login', loginUser);
router.post('/register', createUser);

// Protected routes
router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUser);
router.delete('/:id', authenticateToken, deleteUser);
router.patch('/:id', authenticateToken, updateUser);

module.exports = router;