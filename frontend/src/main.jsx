import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import NewQuery from "./pages/NewQuery/NewQuery.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Login from "./pages/Login/Login.jsx";
import Recommendations from "./pages/Recommendations/Recommendations.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import ReverseSearch from "./pages/RS/ReverseSearch.jsx";
import Search from "./pages/Search/Search.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="/newq" element={<NewQuery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reccs" element={<Recommendations />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/loginsuccess" element={<Home />} />
        <Route path="/reverse-search" element={<ReverseSearch />} />
        <Route path="/search" element={<Search />} />
        <Route path="/reccs/:encodedData" element={<Recommendations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
