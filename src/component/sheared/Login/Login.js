import React, { useEffect, useState } from "react";
import { Button, Form,  } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init'
import "./Login.css";
import Loading from "../Loading/Loading";
import google from '../../../Image/google.png'

const Login = () => {
  const location = useLocation();
  const [signInWithGoogle, googleUser, googleLoading, error2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);


   /*** get input field value ****/ 
  const handleEmailBlur= event =>{
    setEmail(event.target.value);
  }
  const handlePasswordBlur= event =>{
    setPassword(event.target.value);
  }
  
  const handleLogin= (event) =>{
    event.preventDefault()
    signInWithEmailAndPassword(email,password);
  }


  /*** Forget Password ****/ 
  const resetPassword = async (event) =>{
    const email = event.target.value;
    if(email){
     await sendPasswordResetEmail(email);
     toast("Sent email");
    }
    else{
     toast('Please inter your email then password reset')
    }
  }

   /*** when a user login then navigate expected route ****/ 
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const navigateRegister=()=>{
      navigate('/signup')
  }

   /*** Loading message****/ 
  if(loading || sending || googleLoading){
    return <Loading></Loading>
  }

   /*** Error Message ****/ 
  let errorMessage
  if(error){
    errorMessage = <p className="text-danger m-2">{error.message}</p>
  }
  let googleError ;
  if (error2) {
    googleError=<p className="text-danger m-2">Error: {error2.message}</p>
    
  }

  return (
    <div className="w-50 mx-auto form ">
      <h2 className="text-center m-4">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
        </Form.Group>
        
        <Button className="btn btn-success w-100" type="submit">
          Login
        </Button>
        {errorMessage}
        <p className="mt-2">
          New to Photography?{" "}
          <span onClick={navigateRegister} style={{ cursor: "pointer", color: "#47B5FF" }}>
            Please register
          </span>
        </p>
        <p className="mt-2">
          Forget password?{" "}
          <button onClick={resetPassword} className="btn btn-link mb-1" style={{textDecoration:'none', color:'#47B5FF'}}> Reset email</button>
        </p>

        <div>
          <button className="google-signIn-btn bg-white" onClick={()=>signInWithGoogle()}><img height={20} src={google} alt="" /> google sign in</button>
          {googleError}
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;
