import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import "./ReverseSearch.css";
import axios from "axios";
import { API_URL } from "../../environment.js";

const ReverseSearch = () => {
  const [base64String, setBase64String] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [name, setName] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]; // Get the first file

    if (file) {
      const reader = new FileReader();

      // When the file is read, convert it to Base64 and update the state
      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          setBase64String(reader.result); // Base64 string
          setImagePreview(reader.result); // For previewing the image
          axios
            .post(
              `${API_URL}/get_image`,
              JSON.stringify({
                image_base64: reader.result.split("base64,")[1],
              }),
              {
                headers: {
                  "Access-Control-Allow-Methods": "POST",
                  "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  "Content-Type": "application/json", // Ensures the request content type is JSON
                },
              }
            )
            .then((response) => {
              const apiResponse = response.data;
              setName(apiResponse.data);
            });
        }
      };

      reader.readAsDataURL(file); // Read file as Base64
    }
  };

  return (
    <>
      <TopNav />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Upload and Convert Image to Base64</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginBottom: "20px" }}
        />
        {imagePreview && (
          <div style={{ marginBottom: "20px" }}>
            <h2>Image Preview:</h2>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "100%",
                height: "auto",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}
        <h1>{name}</h1>
        {base64String && (
          <div>
            <h2>Base64 String:</h2>
            <textarea
              readOnly
              value={base64String}
              style={{
                width: "100%",
                height: "200px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                resize: "none",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ReverseSearch;
