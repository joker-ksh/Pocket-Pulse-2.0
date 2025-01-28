const express = require('express')
const {getUserDetails,getAllUsers,addFriend} = require('../controllers/userController')
const protect  = require('../middleware/authMiddleware')

const router = express.Router();

//getuser
router.get('/me', protect, getUserDetails);

router.get('/all', protect, getAllUsers);

router.put('/addfriend', protect, addFriend);


module.exports = router;