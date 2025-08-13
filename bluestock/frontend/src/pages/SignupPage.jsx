import { Form, Container, Col, Image, Button, InputGroup } from 'react-bootstrap';
import { useUserStore } from '../store/store';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useState } from 'react';

const SignupPage = () => {
  const { createUser } = useUserStore();
  
  const handleCreateUser = async () => {
    const nameArr = document.getElementById('name').value.trim().split(" ");
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    
    const userData = {
      fname: nameArr.length === 1 ? "" : nameArr[0],
      lname: nameArr.length === 1 ? "" : nameArr[1],
      email: email,
      password: password,
    }
    
    const {success, message} = await createUser(userData);

    if(success) {
      toast.success("Registration complete.");
    } else {
      toast.error(message);
    }
  }

  const [type, setType] = useState("password");
  const [eye, setEye] = useState(<FaEye />);
  
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

  return (
    <div className='container'>
      <Form className='d-flex justify-content-center align-items-center vh-100'>

        <Form.Group as={Col} className="text-shadow d-flex flex-column col-sm-6 col-md-6 col-lg-8">
          <Container>
            <a href="/" className="mb-2 d-flex justify-content-center align-items-center ">
              <Image src="https://bluestock.in/static/assets/logo/logo.webp" className='col-sm-1 col-md-2 col-lg-3 w-50'/>
            </a>
          </Container>
          <h5 className='text-center w-100 fw-bold mb-2 text-shadow'>Create an Account</h5>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="john cena" className="shadow-sm mb-2" id='name' required={true}/>
          
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="hello@bluestock.com" className="shadow-sm mb-2" id='email' required={true}/>

          <Form.Label>Password</Form.Label>
          <InputGroup.Text className="m-0 py-1 bg-transparent"> 
            <Form.Control type={type} placeholder="Password" className='p-0 border-0' id='pass' required={true}/>
            <Button className="btn bg-transparent border-0 text-dark" onClick={showPass}>{eye}</Button>
          </InputGroup.Text>

          <Form.Text className="text-shadow text-muted mb-2">By continuing you agree to our terms of service.</Form.Text>

          <Form.Check label="I'm not a robot" className="user-select-none" id="checkbox-id" required={true}/>
          <Button type='button' className='mb-2 w-100' onClick={handleCreateUser} id="submit">Submit</Button>

          <Button variant="secondary" className='mb-2 w-100'>Continue with Google</Button>

          <Form.Text className="text-shadow text-muted mb-2 text-center">Already have an account? <a href="/signin" className='text-decoration-none'>Sign in here</a></Form.Text>
        </Form.Group>

      </Form>
    </div>
  )
}

export default SignupPage