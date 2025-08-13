import { Button, Card, Breadcrumb } from "react-bootstrap"
import Navbars from "../components/Navbars"

const ContactUs = () => {
  return (
    <div className="contactus">
      <Navbars values={"IPO"}/>
      <div className="container">
        <Breadcrumb className="my-4">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="container">
        <h2 className="text-secondary fw-bold my-5">How can we help you?</h2>
        <div className="row d-flex justify-content-evenly align-items-center my-5">
          <Card className="col-lg-5 col-md-5 col-12">
            <Card.Body>
              <Card.Title>Email us</Card.Title>
              <Card.Text>
                One of our agents will respond at the earliest
              </Card.Text>
              <Button variant="link" className="bg-info text-decoration-none w-100 text-start">hello@bluestock.in</Button>
            </Card.Body>
          </Card>
          
          <Card className="col-lg-5 col-md-5 col-12">
            <Card.Body>
              <Card.Title>Chat us</Card.Title>
              <Card.Text>
                Available from 8:00AM to 5:00PM
              </Card.Text>
              <Button variant="link" className="bg-info text-decoration-none w-100 text-start">Open Chat</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="community row bg-primary text-center text-white p-5 mx-0 my-5">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="fw-bold">Interact With Us in Our Active Community</h1>
          <small className="col-lg-6 col-md-12 my-5">Ask questions or discuss anything related to investing or trading in the most active trading & investing community</small>
          <Button className="bg-dark rounded-5">Join Now</Button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs