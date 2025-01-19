import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5001" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.post("/get_car_recommendations", async (request, response) => {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: getPrompt(request.body.params),
        },
      ],
      temperature: 0.7,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getKey()}`,
      },
    }
  );
  console.log(res.data.choices[0].message.content);
  let recommendations = res.data.choices[0].message.content
    .substring(7)
    .slice(0, -3)
    .replaceAll("\n", "")
    .replaceAll(/\\/g, "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .trim();
  response.status(200).send({
    data: recommendations,
  });
});

function getKey() {
  return (
    "sk-proj-0fMm5B9_hQXBfsiSvakYMnyElxEpDkrl4v0NJm3qFJv3BVrJlGlrzDjnyE15-c2hbHh" +
    "-b5QkDGT3BlbkFJB8aOWuyow0ZErSlZmU9d_TOV1DkrMoIX1L7wFqn7UnKXZQfzbgK6f0BphkxCRCZCSEIckPmKYA"
  );
}

function getPrompt(params: any) {
  return `
         You are a car expert when it comes to reccomending vehicles given these inputs, you make sure that the each vehicle you provide is WITHIN the given price range. Your task is to recommend cars based on the following user preferences. It is critical that you strictly adhere to these restrictions and output the recommendations in a valid JSON format. Ensure the cars meet all criteria and are suitable for validation through the VehicleDatabase API.
       - MAKE SURE TO TRIPPLE CHECK IF THE MINIMUM MSRP IS GREATER THEN min_price, AND MAKE SURE THAT THE HIGHEST MSRP IS LESS THEN THE max_price.
       User Preferences:
       - Price Range: ${params.min_price} to ${params.max_price}
       - Condition: ${params.condition} (e.g., "New" or "Used")
       - Car Styling: ${params.car_styling}
       - Use Case: ${params.use_case}
       - Fuel Type: ${params.fuel_type}
       - Non-Negotiable Features: ${params.non_negotiable} (e.g., "Heated Front Seats, Sun Roof, Adaptive Suspension")
  
       Instructions:
       1. Recommendations:
       - Recommend exactly 5 cars that strictly match the user's preferences.
       - Each car must meet the specified price range, condition, styling, use case, and fuel type.
       - Each car must include all non-negotiable features.
       - Each cars msrp must be within the minimum and maximum price range
       - The lowest tier trim on a car must be greater then the min_price and less then the max_price, for example if the min_price = 52000, a honda pilot even if it meets the requirements should never be displayed since the lowest trim is under 52000
       - make sure that these are the highest rated, most accurate, best reccomendations based on reviews and real world testing, and safety ratings. Display the trim of each car and the safety score as well.
       - Add an estimated price to each of the objects in the list by referencing cars.com, make sure this price is within the price range, make the estimated price another key in the object
       - For used cars only, display the mile range and year at which the car would be best to purchase at to ensure it is the best deal for the customers, make sure to include these in the json file as another key in the object


       2. Output Format:
       - Return the recommendations in the following JSON format:
           [
           {
               "year": 2023,
               "make": "Toyota",
               "model": "Camry",
               "description": "A reliable and fuel-efficient sedan with lane keep assist, sunroof, and adaptive suspension. It fits within the user's price range and is ideal for daily commuting."
           },
           {
               "year": 2022,
               "make": "BMW",
               "model": "M4",
               "description": "A high-performance coupe with over 600 horsepower, heated front seats, and a heads-up display. It matches the user's lifestyle and fun use case."
           }
           ]


       3. Validation:
       - Ensure that the \`year\`, \`make\`, and \`model\` fields in the JSON are valid by querying the following API to make sure it meets the validation requirements below:
           - API URL: https://api.vehicledatabases.com/market-value/ymm/{year}/{make}/{model}
           - Headers: { "x-AuthKey": "1fff04922ea14ff1948d0a640a5d3479" }
       - Car Data URL: https://www.cars.com
       - Validation Requirements:
           - Only recommend cars that will successfully return data from this API.
           - If the user asks for a new car, it must be 2024 or 2025, if it is a used car, then it can be any other year, THIS NEEDS TO BE TRUE FOR THE RECOMMENDATIONS YOU PROVIDE
           - Also make sure that the cars that you are providing are actually within the price range that was provided by cross-referencing with data from the resources I gave above, THIS NEEDS TO BE TRUE FOR THE RECOMMENDATIONS YOU PROVIDE
       - Go the Car Data URL and check the cars you recommend to ensure that it meets the validation requirements above, assume that the zip code is 02120 and the distance is 0 miles


       4. Output Requirements:
       - Provide exactly 5 cars in the JSON array.
       - Ensure all cars meet the user's preferences and can be validated by the VehicleDatabase API.


       Example Output:
       [
       {
           "year": 2023,
           "make": "Tesla",
           "model": "Model S",
           "description": "A luxury electric sedan with heated seats, lane keep assist, and adaptive suspension. Perfect for commuting and lifestyle use, while staying within the price range."
       },
       {
           "year": 2022,
           "make": "Ford",
           "model": "Mustang Mach-E",
           "description": "An electric SUV with a heads-up display, rain-sensing wipers, and over 600 horsepower. Ideal for fun and everyday tasks."
       }
       ]

      At the end of the day, all I want is just a JSON file with the data that I requested, don't say anything else to me. Can you return it as a stringified JSON file?`;
}

export const api = functions.https.onRequest(app);
