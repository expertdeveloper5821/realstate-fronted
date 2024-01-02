import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
// import footerBackGroundimg from "../../assets/images/29306105.jpg";
import logo from "../../assets/logo/newlogo-removebg-preview.png";
function Footer() {
  return (
    <>
      <div
        style={{
          // backgroundImage: `url( ${footerBackGroundimg})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        className="mainbox container"
      >
        <div className="mainbox ">
          <div className="box1">
            <div style={{display:"flex"}}>
              <img className="logoimg" src={logo} alt="logo" />
            </div>

            <p className="foottext">
              The company deals with the various aspects related to real estate.
              Properties, land, structures, ownership rights above the land, and
              subsurface rights below the land are all examples of real estate.
              Real, or tangible, the property is referred to by this phrase.
            </p>
          </div>
          <div className="box">
            <h2 className="head"> Contact Us</h2>
            <p className="foottext">Mohali Phase 8</p>
            <p className="foottext"> +91 9082458547</p>
            <p className="foottext"> +91 9082458547</p>
            <p className="foottext">agniveer@gmail.com</p>
          </div>
          <div className="box">
            <h2 className="head">Categories</h2>
            <Link className="foottext">Recent Properties</Link>
            <Link className="foottext">To Sell</Link>
            <Link className="foottext">To Rent</Link>
            <Link className="foottext">To Buy</Link>
          </div>
          <div className="box">
            <h2 className="head">Links</h2>
            <Link className="foottext">Home</Link>
            <Link className="foottext">Properties</Link>
            <Link className="foottext">Contact</Link>
            <Link className="foottext">About Us</Link>
          </div>
        </div>
      </div>
      <div className="  flex copyrightdiv">
        <div className="copyright">
          <p> &#169; 2024 Qode intractive, All Rights Reserved </p>
        </div>
        <div >
          <div className="flex container">
            <span>Follow us: </span>
            <button className="social-icons">
              <Link style={{ color: "#0862F7" }}>
                <FaFacebookF className="border-radius" />
              </Link>
            </button>
            <button className="social-icons">
              <Link style={{ color: "#F70175" }}>
                <FaInstagram  className="border-radius" />
              </Link>
            </button>
            <button className="social-icons">
              <Link style={{color:"black"}}>
                <FaXTwitter className="border-radius" />
              </Link>
            </button>
            <button className="social-icons">
              <Link style={{ color: "red" }}>
                <FaYoutube className="border-radius" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
