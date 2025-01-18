import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { setDoc, doc } from "firebase/firestore";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user.email.includes("@husky.neu.edu")) {
          await setDoc(
            doc(db, `/users/${user.uid}`),
            { uid: user.uid },
            { merge: true }
          );
          navigate("/home");
        } else {
          throw new Error("Wrong email");
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
