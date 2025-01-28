import { useState,useContext } from 'react';
import './Navbar.css';
import { ScrollContext } from './Scroll/Context.jsx';
import { Link,useNavigate} from 'react-router-dom';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //scroll functionality
  const { scrollToSection } = useContext(ScrollContext);
  const { sectionRefs } = useContext(ScrollContext);


  //dashboard navigation
  const navigate = useNavigate();
  const goDashboard = () => {
    navigate('/dashboard');
  }


  return (
    <div className='nav' ref={sectionRefs.Navbar}>
      <div className="nav-logo" style={{cursor : 'pointer'}}>Pocket Pulse</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>Home</li>
        <Link to="/register"  style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>Register</li>
        </Link>
        <li onClick={() => scrollToSection('Card')}>About</li>
        <li className='nav-contact' onClick={goDashboard}>Dashboard</li>
      </ul>
    </div>
  );
}
