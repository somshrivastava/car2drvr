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
      {/* <TopNav /> */}
      <div className="hero" style={{ backgroundImage: `url(${porshe})` }}>
        <div className="hero-content">
          <h1 className="hero-content-title">Welcome to Car2Drvr</h1>
          <h2 className="hero-content-subtitle">Find your Perfect Car Today</h2>
          <button
            className="hero-content-button"
            onClick={() => navigate("/newq")}
          >
            <img src={iconCar} alt="Car icon" className="search-icon" />
            <span>Search Now</span>
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
