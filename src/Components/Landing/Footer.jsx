import React,{useContext} from "react";
import './Footer.css';  // Footer CSS for styling
import { ScrollContext } from './Scroll/Context.jsx';  // Import ScrollContext from Scroll/Context.jsx
function Footer() {
  const { scrollToSection } = useContext(ScrollContext);
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
        <span 
        onClick={() => scrollToSection('Navbar')}
        style={{ cursor: 'pointer' }}
          >Pocket Pulse</span>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pocket Pulse. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
