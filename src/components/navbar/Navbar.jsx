import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  const [ isOpen, setIsOpen ] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOpen = () => {
    setIsOpen(false);
  }

  return (
    <nav className="nav-bar-links">
      <button className="hamburger-btn" onClick={handleClick}>☰</button>

      <ul className={`nav-links ${isOpen ? "isOpen" : ""}`}>
        <li><Link className="nav-link" to="/home" >Home</Link></li>
        <li><Link className="nav-link" to="/jobs" >Jobs</Link></li>
        <li><Link className="nav-link" to="/bookmarks" >Bookmarks</Link></li>
        <li><Link className="nav-link" to="/profile" >Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;