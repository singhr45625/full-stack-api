const express = require('express');
const router = express.Router();
const { register, login, deleteUser, searchUser, updateUser } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.delete('/delete/:userId', deleteUser);
router.get('/search', searchUser);
router.put('/update/:userId', updateUser);

module.exports = router;