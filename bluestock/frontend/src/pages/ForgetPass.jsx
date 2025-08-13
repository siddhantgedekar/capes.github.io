import { Button, Form, Col, Container } from 'react-bootstrap'

const ForgetPass = () => {
  return (
    <div className='container'>
      <Form className="d-flex justify-content-center align-items-center vh-100">
        <Form.Group as={Col} className="d-flex flex-column justify-content-center col-sm-4 col-md-6 col-lg-8">
          <Container>
            <a href="/" className="mb-2 d-flex justify-content-center align-items-center">
              <img src="https://bluestock.in/static/assets/logo/logo.webp" className="w-50"/>
            </a>
          </Container>

          <h4 className="text-center">Forgot Password?</h4>
          
          <Form.Text className="text-muted mb-2">
            Enter your email address to get the password reset link
          </Form.Text>
          
          <Form.Label className='mb-2'>Email Address</Form.Label>
          <Form.Control type="email" placeholder="hello@bluestock.in" className='mb-2'/>

          <Button variant="primary" className="mb-2 w-100">Password Reset</Button>
          <a role="button" href='/signin' className="btn bg-transparent border-0 mb-2 w-100 text-secondary">Back to login</a>
          
        </Form.Group>
      </Form>
    </div>
  )
}

export default ForgetPass