import React from "react";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <TopNav />
      <div className="contactpage">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
