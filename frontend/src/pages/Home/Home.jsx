import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import "./home.scss";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import {Link} from 'react-router-dom'; 

import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <TopNav/>
    <div className="home-container">
      <div className="hero-section">
        <div className="content-wrapper">
          <h1>Welcome to Car2Drvr</h1>
          <h2>Find your Perfect Car Today</h2>
          <div className="search-button" onClick={() => navigate('/newq')}>
            {/* Placeholder for car icon */}
            <div className="car-icon-placeholder">🚗</div>
            <span>Search Now</span>
            <span className="arrow">›</span>
            
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
