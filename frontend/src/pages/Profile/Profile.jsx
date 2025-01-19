import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import "./Profile.css";
import { isLoggedIn, logout } from "../../utils/auth.js"; // Import auth utilities so topnav profile cna check if user is logged in or not

const Profile = () => {
  return (
    <>
      {/* <TopNav /> */}
      <div className="profilemain">
        <h1>Profile Manager Page</h1>
        <p>
          Thanks for using Car2Drivr! To logout, just click the logout button
          below. We do not store any of your data.
        </p>
        <p>Please contact us if you had any issues while using our web app.</p>
        <button
          className="logoutbutton-profile"
          onClick={logout} // Logout functionality
        >
          Logout 👋
        </button>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Profile;
