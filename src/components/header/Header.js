import React from "react";
import "./style.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../assets/logo/logo.png";
function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("mobile_responsive");
  };
  return (
    <div>
      <header className="container">
        <div className="div_logo">
          <img className="brand_name" src={logo} alt="logo" />
        </div>
        <nav ref={navRef}>
          <Link className="anqr" to="/">
            Home
          </Link>
          <div className="anqr dropdown" to="#">
            Pages
            <div className="dropdown-content">
              <Link  to="/AboutUs">About Us</Link>
              <hr/>
              <Link to="/ContactUs">Contact Us</Link>
            </div>
          </div>
          <Link className="anqr" to="/properties">
            Properties
          </Link>
          <Link className="anqr" to="/AddProperties">
            Add Properties
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <ImCross />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Header;
