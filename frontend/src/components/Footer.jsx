import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Car2Drivr - FinHacks</p>
    </footer>
  );
};

export default Footer;
