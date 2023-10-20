const express = require('express');
const userController = require('../controllers/User');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);

router.use(userController.protect)

router.get('/', userController.getAllUsers)

module.exports = router;