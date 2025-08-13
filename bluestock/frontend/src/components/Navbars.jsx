import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'react-bootstrap';

const Navbars = ({link, val, link2, val2}) => {
  return (
    <Navbar expand="lg" className='shadow-sm bg-white'>
        <Container>
            <a href="/" className="col-md-4 col-lg-2 col-4">
                <img src="https://bluestock.in/static/assets/logo/logo.webp" className="w-100" alt="BlueStock logo"/>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle" className="border-0"/>

            <Navbar.Collapse id="navbar-collapse-id" className="justify-content-between mx-3">
                <Nav>
                    {
                        val === "PRODUCTS" ?
                        <Nav.Link href={link}>{val}</Nav.Link> : <Nav.Link href={link}>{val}</Nav.Link>
                    }
                    <Nav.Link href="/community">COMMUNITY</Nav.Link>
                    <NavDropdown title="MEDIA" id="basic-nav-dropdown">
                        <Nav.Link href='/sector'>
                            Sector
                        </Nav.Link>
                        <Nav.Link href='/analytics'>Analytics</Nav.Link>
                        <Nav.Link href='/stockschool'>Stock School</Nav.Link>
                    </NavDropdown>
                    <Nav.Link href={link2}>{val2}</Nav.Link>
                    <Nav.Link href="/">LIVE NEWS</Nav.Link>
                </Nav>
                {
                    false ? 
                    <Nav>
                        <Nav.Item>{users}</Nav.Item>
                    </Nav>
                    :
                    <Nav>
                        <Nav.Link href="/signin">Sign in</Nav.Link>
                        <Nav.Link href="/signup" className="btn bg-primary text-white px-sm-3 px-lg-2 py-sm-1 py-lg-2">Sign Up Now</Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbars