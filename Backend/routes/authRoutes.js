const express = require('express')
const {registerUser,loginUser,logoutController} = require('../controllers/authController')

const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

//logout
router.post('/logout', logoutController);



module.exports =  router;
