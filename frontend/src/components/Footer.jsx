import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Car2Drivr - FinHacks</p>
        <p>hello</p>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
};

export default Footer;
