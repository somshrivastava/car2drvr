import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
// import { setDoc, doc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (userCredential) => {
        const user = userCredential.user;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(user.email)) {
          navigate("/");
          localStorage.setItem(
            "user",
            JSON.stringify({ uid: user.uid, email: user.email })
          );
          console.log("user logged in with a valid email id");
          console.log(JSON.parse(localStorage.getItem("user")));
        } else {
          throw new Error("Invalid email");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <main>
        <Button label="Login" onClick={onLogin}></Button>
      </main>
    </>
  );
};

export default Login;
