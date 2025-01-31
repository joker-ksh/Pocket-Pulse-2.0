import React from 'react';
import './Background.css'; 
import img from './bg.png'
import LazyLoad from 'react-lazyload';
function Background() {
  return (
    <div className="background-container">
      <LazyLoad height={200} offset={100}>
        <img src={img} alt="background" className="background-image" />
      </LazyLoad>
    </div>
  );
}

export default Background;
