import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import TopNav from "../../components/TopNav.jsx";

const About = () => {
  return (
    <div>
      <TopNav />
      <div>what da helllll</div>\
    </div>
  );
};

export default About;
