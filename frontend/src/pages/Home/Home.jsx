import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import "./home.scss";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";

const Home = () => {
  axios
    .get(
      "http://127.0.0.1:5001/car2drvr-finhacks/us-central1/api/get_car_recommendations"
    )
    .then((res) => {
      const apiResponse = res.data;
      const cleanedDataString = `[${apiResponse.data}]`; // Wrap the string in brackets to make it a valid JSON array
      let dataArray;
      dataArray = JSON.parse(cleanedDataString);
      console.log(dataArray);
    });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        localStorage.setItem("uid", uid);
      } else {
        console.log("User is logged out");
      }
    });
  }, []);

  return (
    <div>
      <TopNav />
      <Footer />
    </div>
  );
};

export default Home;
