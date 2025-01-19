import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import iconCar from "../../assets/super-car.png";
import porshe from "../../assets/porsche.webp";
import "../../../src/global.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNav />
      <div className="home-container">
        <div
          className="hero-section"
          style={{ backgroundImage: `url(${porshe})` }}
        >
          <div className="content-wrapper">
            <h1 className="cards geo-regular">Welcome to Car2Drvr</h1>
            <h2>Find your Perfect Car Today</h2>
            <div className="search-button" onClick={() => navigate("/newq")}>
              <img src={iconCar} alt="Car icon" className="car-icon" />
              <span>Search Now</span>
              <span className="arrow">›</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
