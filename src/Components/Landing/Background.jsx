import React from 'react';
import './Background.css'; 
import img from './bg.png'
function Background() {
  return (
    <div className="background-container">
      <img src={img} alt="background" className="background-image" />
    </div>
  );
}

export default Background;
