import React from "react";

const Profile = () => {
  const handleTransactClick = () => {
    console.log("Transact button clicked");
    alert("clicked");
  };

  return (
    <div className="container">
      <div className="profileCard">
        <div className="profileInfo">
          <img src="./bg.png" alt="Profile" className="profileImage" />
          <div>
            <h2 className="profileName">Pocket Pulse</h2>
            <p className="profileDescription">How are you guys?</p>
          </div>
        </div>

        <div className="statsContainer">
          <div>
            <p className="statsTitle">Friends</p>
            <h3 className="statsCount">41</h3>
          </div>
          <div>
            <p className="statsTitle">Transactions</p>
            <h3 className="statsCount">976</h3>
          </div>
          <div>
            <p className="statsTitle">Rating</p>
            <h3 className="statsCount">8.5</h3>
          </div>
        </div>

        <div className="emailContainer">
          <div>
            <p className="emailTitle">Email</p>
            <h3 className="email">example@gmail.com</h3>
          </div>
          <div />
          <div>
            <p className="lastActiveTitle">Last Active</p>
            <h3 className="lastActive">March 2022</h3>
          </div>
        </div>

        <div className="buttonContainer">
          <button className="button chatButton">CHAT</button>
          <button
            onClick={handleTransactClick}
            className="button transactButton"
          >
            Transact
          </button>
        </div>
      </div>

      <style>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background-image: url("./bg.png"); /* Use your desired background image */
          background-size: cover; /* Ensures the image covers the entire screen */
          background-position: center; /* Centers the background image */
          background-repeat: no-repeat; /* Prevents the image from repeating */
          background-attachment: fixed; /* Keeps the background fixed when scrolling */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profileCard {
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(30px);
          width: 400px;
          border-radius: 10px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          overflow: visible;
          text-align: center;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          position: relative;
        }

        .profileInfo {
          display: flex;
          align-items: center;
          gap: 25px;
          text-align: left;
        }

        .profileImage {
          width: 150px;
          height: 150px;
          border-radius: 10px;
          object-fit: cover;
        }

        .profileName {
          font-size: 2rem;
          margin: 0;
          color: #F5F5F5;
        }

        .profileDescription {
          margin: 10px 0 0;
          font-size: 1.2rem;
          color: #000000;
        }

        .statsContainer {
          display: flex;
          justify-content: space-between;
          text-align: center;
          background-color: rgba(244, 247, 250, 0.5);
          padding: 20px;
          border-radius: 15px;
        }

        .statsTitle {
          margin: 0;
          font-size: 1rem;
          color: #F5F5F5;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .statsCount {
          margin: 10px 0 0;
          font-size: 1.8rem;
          color: #1e3a5f;
        }

        .emailContainer {
          display: flex;
          justify-content: space-between;
          background-color: rgba(244, 247, 250, 0.5);
          padding: 20px;
          border-radius: 15px;
        }

        .emailTitle, .lastActiveTitle {
          margin: 0;
          font-size: 0.9rem;
          color: #F5F5F5;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .email, .lastActive {
          margin: 10px 0 0;
          font-size: 1.2rem;
          color: #1e3a5f;
        }

        .buttonContainer {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .button {
          flex: 1;
          padding: 15px 25px;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .chatButton {
          background-color: #3498db;
          color: white;
        }

        .chatButton:hover {
          background-color: #2980b9;
          transform: translateY(-2px);
        }

        .transactButton {
          background-color: #2ecc71;
          color: white;
        }

        .transactButton:hover {
          background-color: #27ae60;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Profile;
