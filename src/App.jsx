import "./App.css";
import Landing from "./Routes/Landing.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./Components/Auth/Register/Register.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Profile from "./Components/Dashboard/ProfileCard/Profile.jsx";
function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/Profile" element ={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;