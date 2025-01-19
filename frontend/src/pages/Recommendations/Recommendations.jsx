import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./recommendations.scss";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";

const Recommendations = () => {
  const navigate = useNavigate();
  const [data, updateData] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:5001/car2drvr-finhacks/us-central1/api/get_car_recommendations",
        JSON.stringify(
          {
            min_price: 52000,
            max_price: 65000,
            condition: "New",
            car_styling: "SUV",
            use_case: "Commuter car, for work, lifesytle, everyday tasks, fun",
            fuel_type: "Gas",
            non_negotiable:
              "touch screen display, power tailgate, good trunk space, quiet cabin space/low engine noise, 5 seats",
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Allow-Headers": "Content-Type, Authorization",
              "Content-Type": "application/json", // Ensures the request content type is JSON
            },
          }
        )
      )
      .then((res) => {
        const apiResponse = res.data;
        const cleanedDataString = `[${apiResponse.data}]`;
        let dataArray;
        dataArray = JSON.parse(cleanedDataString);
        updateData(dataArray);
        if (dataArray.length > 0) {
          console.log(dataArray[0].make);
        }
      });
  }, []);

  return (
    <>
      <TopNav />
      <p>Hello</p>
      <Footer />
    </>
  );
};

export default Recommendations;
