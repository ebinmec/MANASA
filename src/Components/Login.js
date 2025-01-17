import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import "../App.css";
//import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  console.log("testing")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 // const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  //const { user } = useUserAuth();
 // console.log(user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      //let {_tokenResponse}=await logIn(email, password);
      /*if(_tokenResponse.email=="adminmec@gmail.com"){
        navigate("/admin")
      }else{
        navigate("/home");
      }
      */
    } catch (err) {
      setError(err.message);
    }
  };

  /*const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };*/

  return (
    <>
      <div className="p-4 box"  style={{ width: "400px" }}>
        <h2 className="mb-3">MANASA</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
           <Link to="/Home"> <Button variant="primary" type="Submit">
              Log In
            </Button></Link>
          </div>
        </Form>
        
      </div>
      <div className="p-4 box mt-3 text-center " style={{ width: "400px" }}>
        Don't have an account? <Link to="/Signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;