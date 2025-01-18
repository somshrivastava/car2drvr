import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import TopNav from "../../components/TopNav.jsx";
import "./About.css"; 

const teamMembers = [
  { name: "Rishi Dilip", email: "rishidilip@outlook.com", image: "../../assets/naman_headshot.jpeg" },
  { name: "Naman Rusia", email: "naman.rusia14@gmail.com", image: "path/to/image2.jpg" },
  { name: "Arshay Patel", email: "arshay2324@gmail.com", image: "path/to/image3.jpg" },
  { name: "Som Shrivastava", email: "som.shrivastava@gmail.com", image: "path/to/image4.jpg" }
];


const About = () => {
  return (
    <div>
      <TopNav />
      <div className="about">
        <h1>Car2Drvr</h1>
        <h2>About Us:</h2>
        <p>
          At Car2Drvr, our mission is to empower individuals to find their
          perfect car by delivering tailored recommendations that balance
          features, budget, and long-term value. Purchasing a car is a
          significant financial decision, and with Car2Drvr in your pocket, you
          can confidently make the right choice. Using accurate data and
          insights, we simplify the car-buying journey for a smarter, more
          informed decision.
        </p>
        
        <h2>Our Team:</h2>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <p>{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
