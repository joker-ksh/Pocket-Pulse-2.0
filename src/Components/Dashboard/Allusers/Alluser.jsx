import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Alluser.css'; // Import the CSS file
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { stringify } from 'postcss';


const Alluser = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [users, setUsers] = useState([]);
  const [curr_user, setCurr_user] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/all", {
          withCredentials: true,
        });

        const curr_user = await axios.get("http://localhost:5000/api/user/me", {
          withCredentials: true,
        });

        const currentUserId = curr_user.data.user.id;
        setCurr_user(currentUserId);
        const filteredUsers = res.data.users.filter(
          (user) => user._id !== currentUserId
        );

        setUsers(filteredUsers);
        setFilteredUsers(filteredUsers);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(value)
      )
    );
  };


  const handleAddfriend = async (uid,name) => {
    // console.log(uid, name);
    try {
        // Check if curr_user is defined
        if (!curr_user) {
            console.log("Current user is not defined");
            return;
        }

        const res = await axios.put(
            `http://localhost:5000/api/user/addfriend?me=${curr_user}&fid=${uid}`,
            {},
            { withCredentials: true }
        );

        console.log(res.data);
        toast.success(`Friend added: ${name}`, {
            position: "top-right",
            autoClose: 3000,
        });
        
        console.log(res.data);
        // You can process the response or update the UI as needed
    } catch (error) {
        console.error("Error adding friend:", error.response ? error.response.data : error.message);
        const err = JSON.stringify(error.response ? error.response.data.message : error.message);
        toast.error(err, {
            position: "top-right",
            autoClose: 3000,  
        });
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div className="user-card" key={user._id}>
              <img
                className="user-photo"
                src="https://via.placeholder.com/50"
                alt={user.name}
              />
              <div className="user-info">
                <h3 className="user-name">{user.name || "User Name"}</h3>
                <p className="user-rating">Rating: {user.rating || "N/A"}</p>
              </div>
              <button
                className="add-friend-btn"
                onClick={() => handleAddfriend(user._id,user.name)}
              >
                Add to Friend
              </button>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Alluser;
