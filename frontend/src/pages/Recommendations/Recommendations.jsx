import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recommendations.scss";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";

const Recommendations = () => {
  const [data, setData] = useState([]);
  const { encodedData } = useParams(); // Extract the encoded data from the URL

  useEffect(() => {
    if (!encodedData) {
      console.error("No data provided in the URL");
      return;
    }

    try {
      // Decode and parse the data
      const formData = JSON.parse(decodeURIComponent(encodedData));

      // Log the parsed data (for debugging)
      console.log("Decoded Form Data:", formData);

      // Make the API call with the parsed data
      axios
        .post(
          "http://localhost:5001/car2drvr-finhacks/us-central1/api/get_car_recommendations",
          {
            params: {
              min_price: formData.budgetLow,
              max_price: formData.budgetHigh,
              condition: formData.condition,
              car_styling: formData.carStyle.join(", "),
              use_case: formData.focus,
              fuel_type: formData.fuelType.join(", "),
              non_negotiable: formData.nonNegotiables,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const apiResponse = response.data;
          const cleanedDataString = `[${apiResponse.data}]`;
          let finalResponse = JSON.parse(cleanedDataString);
          console.log(finalResponse);
          setData(finalResponse); // Update state with the API response
        })
        .catch((error) => {
          console.error("Error fetching recommendations:", error);
        });
    } catch (error) {
      console.error("Failed to decode and parse URL data:", error);
    }
  }, [encodedData]);

  return (
    <>
      <TopNav />
      <div>
        <h1>Car Recommendations</h1>
        <ul>
          {data.map((car, index) => (
            <li key={index}>
              <h2>
                {car.year} {car.make} {car.model}
              </h2>
              <p>{car.description}</p>
              <p>Price: {car.estimated_price}</p>
              <p>Trim: {car.trim}</p>
              <p>Safety Score: {car.safety_score}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Recommendations;
