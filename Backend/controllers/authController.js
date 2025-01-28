  const bcrypt =  require('bcryptjs');
  const jwt = require('jsonwebtoken');
  const User =  require('../models/User');

  const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  
      // Set the token in an HTTP-only cookie
      res.cookie("token", token, {
        httpOnly: true, // Can't be accessed via JS
        secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days expiry
        sameSite: "Strict", // Makes the cookie work only in a first-party context
      });
  
      res.status(201).json({
        message: 'User registered successfully!',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  


  const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // console.log(email);
      // console.log(password);
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      // Generate JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });
  
      // Set the JWT in an HTTP-only cookie
      res.cookie("token", token, {
        httpOnly: true, // Cookie can't be accessed via JavaScript
        secure: process.env.NODE_ENV === "production" ? true : false, // Use only in HTTPS when in production
        sameSite: "Strict", // Helps prevent CSRF attacks
        expires: new Date(Date.now() + 1 * 1 * 60 * 60 * 1000), // Set token to expire in 30 days
      });
  
      // Optionally return user details if needed
      res.status(200).json({
        message: "Logged in successfully!",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };


  const logoutController = (req, res) => {
    console.log("Logout endpoint hit!");
    res.clearCookie("token", {
      httpOnly: true,    
      sameSite: "lax",   
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ message: "Logged out successfully" });
  };
  

  module.exports = { registerUser, loginUser , logoutController };



