import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Car2Drvr - FinHacks</p>
    </footer>
  );
};

export default Footer;
