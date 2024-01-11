import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo/newlogo-removebg-preview.png";
const footerdata = [
  {
    id: 1,
    heading: "Conact Us",
    para: [
      "Mohali Phase 8",
      "+91 9082458547",
      "+91 9082458547",
      "agniveer@gmail.com",
    ],
  },
  {
    id: 2,
    heading: "Categories",
    para: ["Recent Properties", "Sell", "Rent", "Buy"],
  },
  {
    id: 3,
    heading: "Links",
    para: ["Home", "Properties", "Contact Us", "About Us"],
  },
];

function Footer() {
  return (
    <>
      <div className="mainbox container">
        <div className="mainbox ">
          <div className="box1">
            <div style={{ display: "flex" }}>
              <img className="logoimg" src={logo} alt="logo" />
            </div>

            <p className="foottext">
              The company deals with the various aspects related to real estate.
              Properties, land, structures, ownership rights above the land, and
              subsurface rights below the land are all examples of real estate.
              Real, or tangible, the property is referred to by this phrase.
            </p>
          </div>
          {footerdata.map((data) => (
            <div className="box">
              <h2 className="head">{data.heading}</h2>
              {data.para.map((para) => (
                <Link className="foottext">{para}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="  flex copyrightdiv">
        <div className="copyright">
          <p> &#169; 2024 Qode intractive, All Rights Reserved </p>
        </div>
        <div>
          <div className="flex container">
            <span>Follow us: </span>
            <button className="social-icons">
              <Link style={{ color: "#0862F7" }}>
                <FaFacebookF className="border-radius" />
              </Link>
            </button>
            <button className="social-icons">
              <Link style={{ color: "#F70175" }}>
                <FaInstagram className="border-radius" />
              </Link>
            </button>
            <button className="social-icons">
              <Link style={{ color: "black" }}>
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
