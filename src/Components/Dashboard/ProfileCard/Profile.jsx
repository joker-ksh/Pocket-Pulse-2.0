import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import bg from './bg.png';
import axios from "axios";

const Profile = () => {
  const [friends, setFriends] = useState(0);
  const [rating, setRating] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To toggle the dropdown
  const totalFriends = 100;
  const totalRating = 85; // Rating out of 100

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const me = await axios.get('http://localhost:5000/api/user/me', { withCredentials: true });
        // console.log(me.data);
        const frnds = me.data.user.friends.length; // count the number of friends
        setFriends(frnds);
        const rtng = me.data.user.rating; // get the user rating
        setRating(rtng);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < friends) {
        setFriends((prev) => prev + 1);
      }
      if (count < rating) {
        setRating((prev) => prev + 1);
      }
      count++;
      if (count >= Math.max(friends, rating)) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg p-12 rounded-3xl shadow-2xl flex flex-col items-center w-96 text-center text-gray-200 relative">
        {/* Edit Button */}
        <button
          className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={toggleDropdown}
        >
          Edit
        </button>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute top-16 right-4 bg-white text-black p-4 rounded shadow-lg w-40 z-10">
            <ul>
              <li className="py-2 hover:bg-gray-200 cursor-pointer">Edit Profile</li>
              <li className="py-2 hover:bg-gray-200 cursor-pointer">Change Settings</li>
              <li className="py-2 hover:bg-gray-200 cursor-pointer">Log Out</li>
            </ul>
          </div>
        )}

        <img
          src={bg}
          alt="Profile"
          className="w-28 h-28 rounded mb-6 border-4 border-gray-500"
        />
        <h2 className="text-3xl font-bold text-white">John Doe</h2>

        <div className="flex justify-between w-full my-6 text-lg text-gray-300">
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Friends</span>
            <div className="w-20 h-20">
              <CircularProgressbar
                value={friends}
                maxValue={totalFriends}
                text={`${friends}`}
                styles={buildStyles({
                  textColor: "#ddd",
                  pathColor: "#16A34A",
                  trailColor: "rgba(255, 255, 255, 0.1)"
                })}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-400">Rating</span>
            <div className="w-20 h-20">
              <CircularProgressbar
                value={rating}
                maxValue={100}
                text={`${rating}%`}
                styles={buildStyles({
                  textColor: "#ddd",
                  pathColor: "#EAB308",
                  trailColor: "rgba(255, 255, 255, 0.1)"
                })}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-6 w-full">
          <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            onClick={() => console.log('Follow clicked')}
          >
            Transact
          </button>
          <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800"
            onClick={() => console.log('Message clicked')}
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
