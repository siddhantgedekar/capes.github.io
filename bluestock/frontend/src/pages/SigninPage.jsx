import { Col, Form, Container, Button, Image, InputGroup, ListGroup } from 'react-bootstrap';
import { useUserStore } from '../store/store.js';
import Navbars from '../components/Navbars.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import IpoHomepage from './IpoHomepage.jsx';

const SigninPage = () => {
  const [type, setType] = useState("password");
  const [eye, setEye] = useState(<FaEye />);
  const { login, user } = useUserStore();
  const navigate = useNavigate();

  const showPass = () => {
    const t = document.getElementById("pass");
    if(t.type === "password"){
      setType("text");
      setEye(<FaEyeSlash />);
    }
    else{
      setType("password");
      setEye(<FaEye />);
    }
  }

  const redirect = () => {
    navigate('/ipohomepage', {state: {values: "IPO"}});
  }
  
  const handleLogin = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    
    try {
      const res = await login(email, pass);
      if(res.success) {
        toast.success("Login Success");
        redirect();
      }
      else {
        toast.error("email or password is incorrect");
      }
    } catch (error) {
      console.log("Internal Server error: ", error.message);
    }
  }

  const handleClick = () => {
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('pass').value.trim();
    // for validating the email, using regex
    const strictEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

    if (email === "") {
      toast.error("Please provide email.");
    } else if (!strictEmailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
    } else if (pass === "") {
      toast.error("Please enter password.");
    } else {
      handleLogin();
    }
  }

  return (
    <div className="container">
      <Form className='d-flex justify-content-center align-items-center vh-100'>
        <Form.Group as={Col} className="mb-2 d-flex flex-column col-sm-4 col-md-6 col-lg-8">
          <Container>
            <a href="/" className='mb-2 d-flex justify-content-center align-items-center'>
              <Image src="https://bluestock.in/static/assets/logo/logo.webp" className="w-50 col-sm-4 col-md-6 col-lg-8"/>
            </a>
          </Container>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="hello@bluestock.com" className='mb-2' id='email' required/>
          
          <ListGroup className="w-100 d-flex justify-content-between flex-row">
            <Form.Label>Password</Form.Label>
            <a href="/forgotpass" className='text-decoration-none'>Forgot Password?</a>
          </ListGroup>
          
          <InputGroup.Text className="m-0 py-1 bg-transparent mb-2">
            <Form.Control type={type} placeholder="Password" id='pass' className='border-0 p-0' required/>
            <Button className="btn bg-transparent border-0 text-dark" onClick={showPass}>{eye}</Button>
          </InputGroup.Text>

          <Form.Check label="Keep me signed in" className="user-select-none" id="checkbox-id"/>

          <Button variant="primary" type="button" className="w-100 mb-2" onClick={handleClick}>Login</Button>

          <Button variant="secondary" className='mb-2 w-auto'>Continue with Google</Button>

          <Form.Text className="text-shadow text-muted mb-2 text-center"><a href="/signup" className='text-decoration-none'>Create an Account</a></Form.Text>

        </Form.Group>

      </Form>
    </div>
  )
}

export default SigninPage