import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <TopNav />
      <div className="profilemain">
        <h1>Profile</h1>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
