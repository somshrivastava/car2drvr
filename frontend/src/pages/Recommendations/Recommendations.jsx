import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import axios from "axios";
import "./recommendations.css";
import { API_URL } from "../../environment.ts";
import { ProgressSpinner } from "primereact/progressspinner";

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
          `${API_URL}/get_car_recommendations`,
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
        .then(async (response) => {
          const apiResponse = response.data;
          const cleanedDataString = `[${apiResponse.data}]`;
          let finalResponse = JSON.parse(cleanedDataString);
          console.log(finalResponse);
          for (let car of finalResponse) {
            console.log(await getImage(car.year, car.make, car.model));
            car.image = await getImage(car.year, car.make, car.model);
          }
          setData(finalResponse); // Update state with the API response
        })
        .catch((error) => {
          console.error("Error fetching recommendations:", error);
        });
    } catch (error) {
      console.error("Failed to decode and parse URL data:", error);
    }
  }, [encodedData]);

  async function getImage(year, make, model) {
    if (localStorage.getItem(`${year}${make}${model}`) == undefined) {
      const response = (
        await axios.get(
          `https://customsearch.googleapis.com/customsearch/v1?q=${year}+${make}+${model}&cx=b6cadfc76acc7457f&key=AIzaSyDoARmjCcPX9zXjVZGm57uIEqK3JXko5mw&searchType=image`
        )
      ).data.items[1].image.thumbnailLink;
      localStorage.setItem(`${year}${make}${model}`, response);
      return response;
    } else {
      return localStorage.getItem(`${year}${make}${model}`);
    }
  }

  return (
    <>
      {/* <TopNav /> */}
      <div className="recsholder">
        <h1>Car Recommendations</h1>
        {data.length == 0 ? (
          <div className="progress-spinner">
            <ProgressSpinner
              style={{ width: "100px", height: "100px" }}
              strokeWidth="5"
            />
          </div>
        ) : (
          <ul>
            {data.map((car, index) => (
              <li className="cards" key={index}>
                <img src={car.image} alt="" />
                <h2>
                  {car.year} {car.make} {car.model}
                </h2>
                <p>{car.description}</p>
                <p>Price: ${car.estimated_price}</p>
                <p>Mile Range: {car.mile_range}</p>
                <p>Trim: {car.trim}</p>
                <p>Safety Score: {car.safety_score}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Recommendations;
