const express = require('express');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // For parsing cookies
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

dotenv.config();

// Connect to database
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(express.json()); // To parse JSON
app.use(cookieParser()); // To parse cookies

// Configure CORS to allow credentials and frontend origin
app.use(cors({
  origin: "http://localhost:5173", 
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  credentials: true, // Allow cookies
}));

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/user', userRoutes); // User routes


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
