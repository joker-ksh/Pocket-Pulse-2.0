import React from 'react';
import bg from './bg.png';

const Profile = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh', // Ensures full screen height
        width: '100vw', // Ensures full screen width
        backgroundImage: `url(${bg})`, // Use the imported image
        backgroundSize: 'cover', // Scale the image to cover the screen
        backgroundPosition: 'center', // Center the image on the screen
        backgroundRepeat: 'no-repeat', // Prevents image repetition
        zIndex: -1, // Sends the background behind other elements
        display: 'flex', // Enables flexbox for centering the card
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(30px)',
          width: '400px',
          borderRadius: '10px',
          boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          textAlign: 'center',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '25px',
            textAlign: 'left',
          }}
        >
          <img
            src={bg}
            alt="Profile"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
          <div>
            <h2
              style={{
                fontSize: '2rem',
                margin: 0,
                color: '#F5F5F5',
              }}
            >
             Pocket Pulse
            </h2>
            <p
              style={{
                margin: '10px 0 0',
                fontSize: '1.2rem',
                color: '#000000',
              }}
            >
              how are you guys   
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            textAlign: 'center',
            backgroundColor: 'rgba(244, 247, 250, 0.5)',
            padding: '20px',
            borderRadius: '15px',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '1rem',
                color: '#F5F5F5',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Friends
            </p>
            <h3
              style={{
                margin: '10px 0 0',
                fontSize: '1.8rem',
                color: '#1e3a5f',
              }}
            >
              41
            </h3>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '1rem',
                color: '#F5F5F5',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Transactions
            </p>
            <h3
              style={{
                margin: '10px 0 0',
                fontSize: '1.8rem',
                color: '#1e3a5f',
              }}
            >
              976
            </h3>
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '1rem',
                color: '#F5F5F5',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Rating
            </p>
            <h3
              style={{
                margin: '10px 0 0',
                fontSize: '1.8rem',
                color: '#1e3a5f',
              }}
            >
              8.5
            </h3>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(244, 247, 250, 0.5)',
            padding: '20px',
            borderRadius: '15px',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '0.9rem',
                color: '#F5F5F5',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Email
            </p>
            <h3
              style={{
                margin: '10px 0 0',
                fontSize: '1.2rem',
                color: '#1e3a5f',
              }}
            >
              example@gmail.com
            </h3>
          </div>
          <div>
            
              
          </div>
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '0.9rem',
                color: '#F5F5F5',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Last Active
            </p>
            <h3
              style={{
                margin: '10px 0 0',
                fontSize: '1.2rem',
                color: '#1e3a5f',
              }}
            >
              March 2022
            </h3>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <button
            style={{
              flex: 1,
              padding: '15px 25px',
              borderRadius: '10px',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: 'blue',
              color: '#fff',
            }}
          >
            CHAT
          </button>
          <button
            style={{
              flex: 1,
              padding: '15px 25px',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: 'none',
              transition: 'all 0.3s ease',
              backgroundColor: 'green',
              color: '#fff',
              cursor : 'pointer'
            }}
          >
            Transact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
