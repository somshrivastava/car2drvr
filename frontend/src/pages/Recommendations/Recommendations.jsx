import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./recommendations.scss";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";

const Recommendations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:5001/car2drvr-finhacks/us-central1/api/get_car_recommendations",
        JSON.stringify({
          params: {
            min_price: 30000,
            max_price: 40000,
            condition: "New",
            car_styling: "SUV",
            use_case: "Commuter car, for work, lifesytle, everyday tasks, fun",
            fuel_type: "Gas",
            non_negotiable:
              "touch screen display, power tailgate, good trunk space, quiet cabin space/low engine noise, 5 seats",
          },
        }),
        {
          headers: {
            "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Content-Type": "application/json", // Ensures the request content type is JSON
          },
        }
      )
      .then((response) => {
        const apiResponse = response.data;
        const cleanedDataString = `[${apiResponse.data}]`;
        let dataArray = JSON.parse(cleanedDataString);
        setData(dataArray);
      });
  }, []);

  return (
    <>
      <TopNav />
      <div>
        <h1>Car Details</h1>
        <ul>
          {data.map((car, index) => (
            <li key={index}>
              <h2>
                {car.year} {car.make} {car.model}
              </h2>
              <p>{car.description}</p>
              <p>{car.estimated_price}</p>
              <p>{car.trim}</p>
              <p>{car.safety_score}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Recommendations;
