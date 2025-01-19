import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase.js";
import { Button } from "primereact/button";
import { setDoc, doc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithPopup(
        auth,
        new GoogleAuthProvider()
      );
      const user = userCredential.user;
      if (user.email.includes("@husky.neu.edu")) {
        await setDoc(
          doc(db, `/users/${user.uid}`),
          { uid: user.uid },
          { merge: true }
        );
        navigate("/home");
      } else {
        alert("Please use a valid Northeastern email.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <Button label="Login with Google" onClick={onLogin} />
    </div>
  );
};

export default Login;
