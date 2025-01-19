import React from "react";
import "./TopNav.css";
import { isLoggedIn, logout } from "../utils/auth"; // Import auth utilities

function TopNav() {
  const navigate = (path) => {
    window.location.href = path;
  };

  const userLoggedIn = isLoggedIn(); // Check if the user is logged in

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
        <button className="topnav-button" onClick={() => navigate("/contact")}>
          Contact
        </button>
        <button className="topnav-button" onClick={() => navigate("/newq")}>
          New Query
        </button>
      </div>

      {/* Profile Button */}
      <div className="topnav-end">
        {userLoggedIn ? (
          <>
            <button
              className="topnav-profile-button"
              onClick={() => navigate("/profile")} // Navigate to User Dashboard
            >
              <i className="topnav-icon">👤</i>
            </button>
            <button
              className="topnav-logout-button"
              onClick={logout} // Logout functionality
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="topnav-profile-button"
            onClick={() => navigate("/login")} // Navigate to Login
          >
            <i className="topnav-icon">👤</i>
          </button>
        )}
      </div>
    </div>
  );
}

export default TopNav;
