import { Form, Button } from 'react-bootstrap';
import { userStore } from '../store/store';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Signin = () => {
    const { login, createUser } = userStore();
    const [isLogin, setIsLogin] = useState("block");
    const [isReg, setIsReg] = useState("none");
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        tasks: [
            {
                description: "",
                completed: ""
            }]
    });

    const handleOnSubmit = async () => {
        // register user
        const { success, message } = await createUser(newUser);
        // notify
        if(success) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }
    const handleLogin = async () => {
        // login user
        const { success, message } = await login(newUser);
        // notify
        if(success) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    const showMenu = () => {
        isLogin === "block" ? (setIsLogin("none"), setIsReg("block")) : (setIsLogin("block"), setIsReg("none"))
    }

  return (
    <div className='vh-100 row d-flex justify-content-center align-items-center m-0'>
        <div className="container col-lg-6 col-md-10">
            <Form className={`bg-white rounded p-3 d-${isLogin}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3>Registration</h3>
                    <Button className="text-primary border-0 bg-transparent" onClick={showMenu}>Login?</Button>
                </div>
                <Form.Group controlId="name" className="my-2">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => {setNewUser({...newUser, name: e.target.value})}}/>
                </Form.Group>

                <Form.Group controlId="email" className="my-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setNewUser({...newUser, email: e.target.value})}}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password" className="my-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => {setNewUser({...newUser, password: e.target.value})}}/>
                </Form.Group>
                
                <Button variant="primary" className="mt-2" onClick={ handleOnSubmit }>Submit</Button>
            </Form>
            
            <Form className={`bg-white rounded p-3 d-${isReg}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3>Login</h3>
                    <Button className="text-primary border-0 bg-transparent" onClick={showMenu}>Register?</Button>
                </div>

                <Form.Group controlId="email" className="my-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setNewUser({...newUser, email: e.target.value})}}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password" className="my-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => {setNewUser({...newUser, password: e.target.value})}}/>
                </Form.Group>
                
                <Button variant="primary" className="mt-2" onClick={ handleLogin }>Login</Button>
            </Form>
        </div>
    </div>
  )
}

export default Signin;