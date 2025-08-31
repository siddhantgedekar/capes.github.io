import { Navbar, Nav, Button, Form } from "react-bootstrap";

const Navbars = () => {
  return (
    <div className="my-2">
        <Navbar className="px-4 bg-white rounded mt-5 d-flex justify-content-between">
            <Navbar.Brand href="#home">Todo List</Navbar.Brand>
            <Form>
                <Button variant="primary" href="/userpage" className="mx-2">List Users</Button>
                <Button variant="primary" href="/signin">Sign In/Up</Button>
            </Form>
        </Navbar>
    </div>
  )
}

export default Navbars;