const jwt = require('jsonwebtoken');
const User = require('../models/User')


const protect = async (req, res, next) => {
  try {
    // Check if token is in cookies
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user from the database
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Attach user info to the request
    req.user = user;

    // Proceed to the next middleware/route handler
    next();

  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = protect;
