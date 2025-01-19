import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import TopNav from "../../components/TopNav.jsx";
import Footer from "../../components/Footer.jsx";
import "./ReverseSearch.css";
import axios from "axios";

const ReverseSearch = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <TopNav />
      <div className="rspanel">
        <h1>Reverse Search [to be implemented]</h1>
      </div>
      <Footer />
    </>
  );
};

export default ReverseSearch;
