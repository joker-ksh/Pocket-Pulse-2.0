import React, { useState } from "react";
import {Sun,Moon,Search,MessageSquare,UserPlus,Send,LogOut,ChevronRight,Star,} from "lucide-react";
import "./Dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";//useLocation is a React Hook from the react-router-dom library used to get the current URL/location object in your application

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alluser from "./Allusers/Alluser";
import Friends from "./Friends/Friends";


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const location = useLocation();
  const [hasShownToast, setHasShownToast] = React.useState(false);

  React.useEffect(() => {
    if (location.state?.successMessage && !hasShownToast) { //if success message is there passed from login page and toast is not shown then show the toast
      toast.success(location.state.successMessage, {
        position: "top-right",
        autoClose: 3000,
      });
      setHasShownToast(true);
    }
  }, [location.state?.successMessage])


  const userData = {
    totalBorrowed: 1500,
    totalLent: 2000,
    friendCount: 45,
    rating: 85,
  };


  //logout logic 
  const navigate = useNavigate();

  const handleLogout = async () => {
      try{
        const res = await axios.post("http://localhost:5000/api/auth/logout" ,{} , {withCredentials : "true"});
        navigate("/",{
          state : {logoutMsg : "Logged out successfully"}
        });
      }catch(e){
        console.log(e);
      }
  }

  const handleProfileClick = () => {
    navigate("/Profile");
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>

      {/* do not remove it from here it is overriding with the landing page css */}
      <style>
        {`
        .app {
            min-height: 100vh;
            background-color: #f0f7ff;
          }

          .app.dark {
            background-color: #1a1a2e;
            color: #fff;
          }

          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 64px;
            background-color: #fff;
            display: flex;
            align-items: center;
            padding: 0 24px;
            border-bottom: 1px solid #e0e7ff;
            z-index: 100;
          }

          .dark .navbar {
            background-color: #2d2d4d;
            border-color: #404060;
          }

          .nav-logo {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-left: 24px;
          }

          .nav-actions {
            margin-left: auto;
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            color: #2563eb;
          }

          .dark .theme-toggle {
            color: #fff;
          }

          .profile-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #2563eb;
            padding: 0;
            cursor: pointer;
          }

          .profile-btn img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .layout {
            display: flex;
            padding-top: 64px;
            min-height: 100vh;
            gap: 24px;
          }

          .sidebar {
            width: 240px;
            background-color: #fff;
            position: fixed;
            left: 24px;
            top: 88px;
            bottom: 24px;
            padding: 24px 16px;
            display: flex;
            flex-direction: column;
            border-radius: 16px;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
          }

          .dark .sidebar {
            background-color: #2d2d4d;
            border-color: #404060;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          }

          .nav-items {
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex: 1;
          }

          .nav-item {
            padding: 12px 16px;
            border-radius: 8px;
            border: none;
            background: none;
            text-align: left;
            cursor: pointer;
            color: #4b5563;
            transition: all 0.2s;
          }

          .dark .nav-item {
            color: #e5e7eb;
          }

          .nav-item:hover {
            background-color: #e0e7ff;
          }

          .dark .nav-item:hover {
            background-color: #404060;
          }

          .nav-item.active {
            background-color: #2563eb;
            color: #fff;
          }

          .logout-btn {
            padding: 12px 16px;
            border-radius: 8px;
            border: none;
            background: none;
            color: #ef4444;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .main {
            margin-left: 288px;
            padding: 24px;
            flex: 1;
            margin-right: 24px;
            margin-top: 24px;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-bottom: 32px;
          }

          .stat-card {
            background: #fff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
          }

          .dark .stat-card {
            background-color: #2d2d4d;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          }

          .stat-card h3 {
            font-size: 14px;
            color: #4b5563;
            margin-bottom: 8px;
          }

          .dark .stat-card h3 {
            color: #e5e7eb;
          }

          .stat-card p {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin: 0;
          }

          .search-bar {
            display: flex;
            align-items: center;
            gap: 12px;
            background: #fff;
            padding: 12px 16px;
            border-radius: 12px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
          }

          .dark .search-bar {
            background-color: #2d2d4d;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          }

          .search-bar input {
            border: none;
            outline: none;
            font-size: 16px;
            background: none;
            flex: 1;
            color: #4b5563;
          }

          .dark .search-bar input {
            color: #e5e7eb;
          }

          .search-bar input::placeholder {
            color: #9ca3af;
          }

          .users-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
          }

          .user-card {
            background: #fff;
            padding: 16px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
          }

          .dark .user-card {
            background-color: #2d2d4d;
            box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .user-info img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            border: 2px solid blue;
          }

          .user-details h4 {
            margin: 0;
            font-size: 16px;
            color: #4b5563;
          }

          .dark .user-details h4 {
            color: #e5e7eb;
          }

          .user-details p {
            margin: 4px 0 0;
            color: #6b7280;
            font-size: 14px;
          }

          .dark .user-details p {
            color: #9ca3af;
          }

          .add-friend-btn {
            padding: 8px 16px;
            border-radius: 8px;
            border: none;
            background: blue;
            color: #fff;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background-color 0.2s;
          }

          .add-friend-btn:hover {
            background: blue;
          }
        `}
      </style>
      {/* style ends here */}

      <nav className="navbar">
        <div className="nav-logo">Pocket Pulse</div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={handleProfileClick} className="profile-btn">
            <img src="/api/placeholder/40/40" alt="Profile" />
          </button>
        </div>
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <div className="nav-items">
            <button
              className={`nav-item ${activeSection === "profile" ? "active" : ""}`}
              onClick={() => setActiveSection("profile")}
            >
              Profile
            </button>
            <button
              className={`nav-item ${activeSection === "friends" ? "active" : ""}`}
              onClick={() => setActiveSection("friends")}
            >
              Friends
            </button>
            <button
              className={`nav-item ${activeSection === "transactions" ? "active" : ""}`}
              onClick={() => setActiveSection("transactions")}
            >
              Transactions
            </button>
            <button
              className={`nav-item ${activeSection === "chat" ? "active" : ""}`}
              onClick={() => setActiveSection("chat")}
            >
              Message
            </button>
            <button
              className={`nav-item ${activeSection === "rate" ? "active" : ""}`}
              onClick={() => setActiveSection("rate")}
            >
              Rate
            </button>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={20} />
            Logout
          </button>
        </aside>

        <main className="main">
          {activeSection === "profile" && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Borrowed</h3>
                  <p>${userData.totalBorrowed}</p>
                </div>
                <div className="stat-card">
                  <h3>Total Lent</h3>
                  <p>${userData.totalLent}</p>
                </div>
                <div className="stat-card">
                  <h3>Rating</h3>
                  <p>{userData.rating}%</p>
                </div>
                <div className="stat-card">
                  <h3>Inbox</h3>
                  <p>Message here</p>
                </div>
              </div>

              {/* all users list component */}
              <Alluser />
            </>
          )}

          {/* this is friends section*/}
          {activeSection === "friends" && (
            <>
              <Friends />
              {/* <p>Friends section</p> */}
            </>
          )}

          {/* this is friends section*/}
          {activeSection === "transactions" && (
            <>
              <p>Transaction section</p>
            </>
          )}

          {activeSection === "chat" && (
            <>
              <p>Message section..</p>
            </>
          )}


          {activeSection === "rate" && (
            <>
              <p>Rating section</p>
            </>
          )}
        </main>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Dashboard;
