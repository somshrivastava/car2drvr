import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import axios from "axios";
import { OPEN_AI_KEY } from "../env";

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors({ origin: true }));

// Middleware for parsing JSON
app.use(express.json());

app.post("/get_car_data", async (req, res) => {
  const response = await axios.get(
    `https://api.vehicledatabases.com/market-value/ymm/${req.body.year}/${req.body.make}/${req.body.model}`
  );
  res.status(200).send({ data: response.data });
});

app.get("/get_car_recommendations", async (req, res) => {
  const response = ((await callChatGPTAPI()) as string)
    .substring(7)
    .slice(0, -3)
    .replaceAll("\n", "")
    .replaceAll(/\\/g, "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .trim();
  console.log(response);
  res.status(200).send({
    data: response,
  });
});

const OPEN = OPEN_AI_KEY;

async function callChatGPTAPI() {
  const url = "https://api.openai.com/v1/chat/completions";

  const params = {
    min_price: 52000,
    max_price: 65000,
    condition: "Used",
    car_styling: "Sedan",
    use_case: "Commuter car, for work, lifesytle, everyday tasks, fun",
    fuel_type: "Gas",
    non_negotiable:
      "touch screen display, power tailgate, good trunk space, quiet cabin space/low engine noise, 5 seats, over 330 horse power",
  };

  const chatGPTPrompt = `
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
       - 


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

  const data = {
    model: "gpt-4o", // Change to "gpt-4o-mini" if you're using that specific model
    messages: [
      {
        role: "user",
        content: chatGPTPrompt,
      },
    ],
    temperature: 0.7,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPEN}`,
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log("Response from ChatGPT API:");
    return response.data.choices[0].message.content;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response from OpenAI API:", error.response?.data);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

export const api = functions.https.onRequest(app);
