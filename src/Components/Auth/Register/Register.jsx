import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook from react-router-dom v6
import "./Register.css";
import logo from "./logo.png";
import Background from "../../Landing/Background";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // Store error message
  const [loading, setLoading] = useState(false); // To show loading state
  const navigate = useNavigate(); // Use navigate hook for redirection

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state before making the API call
    setLoading(true);
    setError("");

    try {
      // Send POST request to the backend
      const response = await axios.post("http://localhost:5000/api/auth/register", formData, { withCredentials: true });
      
      // After successful registration, you can redirect using navigate
      console.log(response.data.message);
      navigate(`/dashboard?user=${response.data.user.name}&id=${response.data.user.id}`,{
        state : {successMessage : "Registered in successfully"}
      }); // Redirect to login page

    } catch (err) {
      setLoading(false);
      // Display error message if registration fails
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="register-container">
      <Background />
      <div className="register-content">
        {/* Logo */}
        <img src={logo} alt="Pocket Pulse Logo" className="logo" />

        {/* Welcome Text */}
        <h2>Welcome to Pocket Pulse</h2>
        <p className="welcome-text">Create your account to get started</p>

        {/* Display error message */}
        {error && <div className="error-message">{error}</div>}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="register-form">
          {/* Name */}
          <div className="input-container">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              id="name"
              placeholder=" "
            />
            <label htmlFor="name" className="input-label">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              id="email"
              placeholder=" "
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
              id="password"
              placeholder=" "
            />
            <label htmlFor="password" className="input-label">
              Password
            </label>
          </div>

          {/* Register Button */}
          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
