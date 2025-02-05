import React, { useEffect, useState } from "react";
import "./Friends.css";
import axios from "axios";
import Transact from "./Buttonpopup/Transact";
import Message from "./Buttonpopup/Message";

const Friends = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [friend, setFriend] = useState([]);
  const [me, setMe] = useState("");
  const [name,setName] = useState("");
  const [error, setError] = useState(null);

  // Search function
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = friend.filter((user) =>
      user.name.toLowerCase().includes(value)
    );
    setFilteredUsers(filtered);
  };

  // Fetch the current logged user and friends
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const curr_user = await axios.get("http://localhost:5000/api/user/me", {
          withCredentials: true,
        });
        const uid = curr_user.data.user.id;
        const name = curr_user.data.user.name;
        const frnds = curr_user.data.user.friends;
        setFriend(frnds);
        setFilteredUsers(frnds); // Initialize filtered users with all friends
        setMe(uid);
        setName(name);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };
    fetchUser();
  }, []); // Add an empty dependency array to run only once on mount


  if (error) {
    return <p>Error: Unable to fetch data.</p>;
  }

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

              <div className="m-4">
                <Message />
              </div>
              
              <div className="m-4">
                <Transact me={me} friend={user._id} naam={name} fnaam={user.name} />
              </div>
              
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Friends;
