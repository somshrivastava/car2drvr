import React from "react";
import "./TopNav.css";
import { Link } from "react-router-dom";

function TopNav() {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="topnav">
      {/* Logo Section */}
      <div className="topnav-start">
        <img
          alt="logo"
          src="/logo.svg"
          className="topnav-logo"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Navigation Links */}
      <div className="topnav-links">
        <button className="topnav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="topnav-button" onClick={() => navigate("/about")}>
          About
        </button>
        <button className="topnav-button" onClick={() => navigate("/services")}>
          Services
        </button>
        <button className="topnav-button" onClick={() => navigate("/contact")}>
          Contact
        </button>
        <button className="topnav-button" onClick={() => navigate("/newq")}>
          New Query
        </button>
      </div>

      {/* Profile Button */}
      <div className="topnav-end">
        <button
          className="topnav-profile-button"
          onClick={() => alert("Profile button clicked!")}
        >
          <i className="topnav-icon">👤</i>
        </button>
      </div>
    </div>
  );
}

export default TopNav;
