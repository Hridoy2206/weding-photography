import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import google from "../../../Image/google.png";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  // const [error, setError] = useState('')

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (agree) {
  }

  let notMatch;
  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      notMatch = <p className="text-danger">Password not mach</p>;
    } else {
      createUserWithEmailAndPassword(email, password);
    }
  };
  
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger m-2">{error?.message}</p>;
  }
  if (googleLoading || loading ) {
    return <Loading></Loading>;
  }
  let errorGoogle;
  if(googleError){
    errorGoogle = <p className="text-danger m-2">{googleError.message}</p>
  }
  if (user) {
    navigate("/");
  }

  const navigateLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="w-50 mx-auto form">
      <h2 className="text-center">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            onBlur={handleConfirmPassword}
            type="password"
            placeholder="Password"
            required
          />
          {notMatch}
        </Form.Group>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={`m-2 ${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept all terms and condition
        </label>
        <Button disabled={!agree} className="btn btn-success w-100" type="submit">
          Sign Up
        </Button>
        {errorElement}
        <p
          style={{ cursor: "pointer", margin: "10px 0px", fontSize: "17px" }}
          className="text-secondary"
        >
          Already you have an Account?
          <span
            style={{
              cursor: "pointer",
              color: "#47B5FF",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
            onClick={navigateLogin}
          >
            Login
          </span>
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <div
            style={{ height: "2px", background: "#999" }}
            className="w-25"
          ></div>
          <p className="p-3 mt-2">or</p>
          <div
            style={{ height: "2px", background: "#999" }}
            className="w-25"
          ></div>
        </div>
        <div>
          <button
            className="google-signIn-btn bg-white"
            onClick={() => signInWithGoogle()}
          >
            <img height={20} src={google} alt="" /> google sign in
          </button>
          {errorGoogle}
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
