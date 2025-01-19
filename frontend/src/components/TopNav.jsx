import React from "react";
import "./TopNav.css";
import { isLoggedIn, logout } from "../utils/auth"; // Import auth utilities
import { useNavigate } from "react-router-dom";

function TopNav() {
  const navigate = useNavigate(); // React Router navigation
  const userLoggedIn = isLoggedIn(); // Check if the user is logged in
  const user = userLoggedIn ? JSON.parse(localStorage.getItem("user")) : null; // Retrieve user data from localStorage

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

      {/* Profile Section */}
      <div className="topnav-end">
        {userLoggedIn ? (
          <>
            {/* Display User's Profile Image */}
            <img
              src={user?.photoURL || "/default-profile.png"} // Display profile image or default
              alt="Profile"
              className="topnav-profile-image"
              onClick={() => navigate("/profile")} // Navigate to User Profile
            />
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
