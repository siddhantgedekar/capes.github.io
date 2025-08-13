import { Card, Accordion } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Navbars values={"IPO"} />

            <div className="container my-5">
                <a href="/" className='text-decoration-none'>Home</a>
                <a className='mx-2 text-decoration-none text-secondary'>&gt;</a>
                <a className='text-secondary text-decoration-none'>About Us</a>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h2>Bluestock is mobile app for stock market learning, analytics & club</h2>
                        <small className='text-secondary'>
                            We are passionate about helping you succeed in the stock market by providing cutting edge tools and a supportive community of traders.
                            <br/>
                            Join us on this journey and let's make your stock trading eperience better.
                        </small>
                    </div>
                </div>
                
                <div className='d-flex justify-content-evenly row my-5'>
                    <Card className='bg-primary text-center col-lg-3 col-md-4 p-5 my-4'>
                        <Card.Body>
                            <Card.Title className='fw-bold text-white'>5 Thousand</Card.Title>
                            <Card.Text>Customers</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='bg-primary text-center col-lg-3 col-md-4 p-5 my-4'>
                        <Card.Body>
                            <Card.Title className='fw-bold text-white'>20+</Card.Title>
                            <Card.Text>Team Members</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='bg-primary text-center col-lg-3 col-md-4 p-5 my-4'>
                        <Card.Body>
                            <Card.Title className='fw-bold text-white'>4.9</Card.Title>
                            <Card.Text>Ratings</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="traders-talk container text-center">
                <h5>T R A D E R S &nbsp;&nbsp;&nbsp; T A L K</h5>
                <h1 className='fw-bold'>Recent News</h1>
                <div className="cards d-flex justify-content-between row">
                    <Card className='col-lg-3 col-md-5 card-set border-0 my-2'>
                        <Card.Body>
                            <Card.Title className='traders-text'>Business Standard</Card.Title>
                            <Card.Text>
                                Rs 20 Trillion & rising: AUM of active equity mutual funds surges
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-3 col-md-5 card-set border-0 my-2'>
                        <Card.Body>
                            <Card.Title className='traders-text1'>Medium</Card.Title>
                            <Card.Text>
                                Bluestock is a mobile app for stock market learning, analytics and club supportive community of traders.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-lg-3 col-md-5 card-set border-0 my-2'>
                        <Card.Body>
                            <Card.Title className='traders-text2 d-flex justify-content-center'>BW &nbsp; <Card.Title className="traders-text21">BUSINESS WORLD</Card.Title></Card.Title>
                            <Card.Text>
                                Mutual Funds Experience a Fourfold Surge In NFO Collections, Reaching Rs 22,000 Cr in Q2
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="media text-center my-5">Media & Press Release</div>

                <div className="joinUs row text-start bg-primary p-4 m-4 rounded-5">
                    <div className='mx-lg-5 col'>
                        <h1 className='fw-bold text-white'>Want to join us?</h1>
                        <small className='text-white'>
                            We're taking complicated stuff and making it super simple. Our teams are full ofsmart and savvy folks working on challenging tasks. <br/><br/> And we're always looking for customer-obsessed people, Think you’re customer-focused enough? Write to us at hello@bluestock.in.
                        </small>
                    </div>
                    <div>
                        <a href="/carrers" className='btn btn-info m-5 text-white col'>Apply Now</a>
                    </div>
                </div>

                <div className="faq container my-5 pt-5 row">
                    <h1 className='text-uppercase col'>Frequently asked questions</h1>
                    <Accordion defaultActiveKey="0" className=''>
                        <Accordion.Item eventKey="0" className='shadow-lg my-4'>
                            <Accordion.Header>What is Bluestock?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='shadow-lg my-4'>
                            <Accordion.Header>What platforms does Bluestock support?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='shadow-lg my-4'>
                            <Accordion.Header> Is there educational content on the app?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='shadow-lg my-4'>
                            <Accordion.Header>Is Bluestock free to use?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='shadow-lg my-4'>
                            <Accordion.Header> How can I get technical support for the app?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About