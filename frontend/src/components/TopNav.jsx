import React from "react";
import "./TopNav.scss";
import { isLoggedIn, logout } from "../utils/auth"; // Import auth utilities
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function TopNav() {
  const navigate = useNavigate(); // React Router navigation
  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : null; // Retrieve user data from localStorage

  const onLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (userCredential) => {
        const user = userCredential.user;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(user.email)) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL, // Save the profile image URL
            })
          );
          navigate("/");
          console.log("User logged in with a valid email ID");
          console.log(JSON.parse(localStorage.getItem("user")));
        } else {
          throw new Error("Invalid email");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar">
      {/* Navbar Start Section */}
      <div className="navbar-start">
        <img
          alt="Logo"
          src="/logo.svg"
          className="navbar-start-logo"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Navbar Links Section */}
      <div className="navbar-links">
        <button className="navbar-links-button" onClick={() => navigate("/")}>
          Home
        </button>
        <button
          className="navbar-links-button"
          onClick={() => navigate("/newq")}
        >
          New Query
        </button>
        <button
          className="navbar-links-button"
          onClick={() => navigate("/reverse-search")}
        >
          Reverse Search
        </button>
        <button
          className="navbar-links-button"
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className="navbar-links-button"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>

      {/* Navbar End Section */}
      <div className="navbar-end">
        {JSON.parse(localStorage.getItem("user")) ? (
          <img
            src={user?.photoURL || "/default-profile.png"}
            alt="User Profile"
            className="navbar-end-pfp"
            onClick={() => navigate("/profile")}
          />
        ) : (
          <button className="navbar-end-button">
            <img alt="Profile Logo" src="/profile.jpg" onClick={onLogin} />
          </button>
        )}
      </div>
    </div>
  );
}

export default TopNav;
