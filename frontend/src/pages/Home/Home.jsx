import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import "./home.scss";
import TopNav from "../../components/TopNav.jsx";

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        localStorage.setItem("uid", uid);
      } else {
        console.log("User is logged out");
      }
    });
  }, []);

  return (
    <div>
      <TopNav />
    </div>
  );
};

export default Home;
