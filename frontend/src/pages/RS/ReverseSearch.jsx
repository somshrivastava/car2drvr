import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import "./ReverseSearch.css";
import axios from "axios";
import { API_URL } from "../../environment.ts";
import { ProgressSpinner } from "primereact/progressspinner";

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
      {/* <TopNav /> */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Upload and Image</h1>
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
                maxWidth: "275px",
                height: "auto",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}
        <h1>
          {name.length == 0 && base64String.length > 0 ? (
            <div className="progress-spinner">
              <ProgressSpinner
                style={{ width: "100px", height: "100px" }}
                strokeWidth="5"
              />
            </div>
          ) : (
            <p>{name}</p>
          )}
        </h1>
      </div>
    </>
  );
};

export default ReverseSearch;
