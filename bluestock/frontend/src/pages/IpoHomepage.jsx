import { Accordion, Carousel, Card, Button, Stack } from 'react-bootstrap';
import { useIPOStore } from '../store/store.js';
import Navbars from '../components/Navbars';
import Footer from '../components/Footer';
import logo from '../logo.webp';

const IpoHomepage = () => {
    const { getIPO, ipo } = useIPOStore();

    const fetchData = async () => {
        await getIPO();
    }

    return (
        <div className='ipo-homepage' onLoad={fetchData}>
            <Navbars val={'IPO'} link={'/ipohomepage'} val2={'DASHBOARD'} link2={"/dashboard"}/>
            <div className="container">
                <div className='ipoAnnounce mt-5'>
                    <h3 className='fw-bold'>IPO</h3>
                    <small>Following is the list of companies for IPO as of today.</small>
                </div>
                <div className="upcoming d-flex justify-content-between align-items-center my-3">
                    <div>
                        <h4>Upcoming</h4>
                        <small>Companies that have filed for an IPO with SEBI. Few details might be disclosed by the companies later on.</small>
                    </div>
                    <button className='btn btn-primary'>View All</button>
                </div>

                <div className='my-3 d-flex overflow-auto'>
                    {ipo.map((ipos) => {
                        return (
                            <Card className="m-2 p-2 col-md-8 col-lg-5" key={ipos._id}>
                                <Card.Body>
                                    <Card.Title className='text-truncate'>{ipos.company}</Card.Title>
                                    <div className="items">
                                        <div className='row'>
                                            <ul className='nav px-3 my-2'>
                                                <li className="col nav-item">PRICE BAND <br/>{ipos.ipo_fees}</li>
                                                <li className="col nav-item">OPEN <br/>{ipos.profit}</li>
                                                <li className="col nav-item">CLOSE <br/>{ipos.assets}</li>
                                            </ul>
                                        </div>
                                        <div className='row'>
                                            <ul className="nav px-3">
                                                <span className="col nav-item">ISSUE SIZE <br/>{ipos.ipo_price}</span>
                                                <span className="col nav-item">ISSUE TYPE <br/>{ipos.industry}</span>
                                                <span className="col nav-item">LISTING DATE <br/>{ipos.ipo_date}</span>
                                            </ul>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>

                <Card>
                    <Card.Body className='d-flex justify-content-center align-items-center flex-column p-5'>
                        <Card.Title className="d-flex justify-content-center"><img src={logo} alt="logo" className="col-4"/></Card.Title>
                        <h4>Applying for this IPO?</h4>
                        <Card.Text className="col-10">The way you compare & invest in only the best IPO, let us help you get started by comparing and selecting the best Demat account. Open your Demat account now to apply for your favourite IPO.</Card.Text>
                        <Button variant="primary">Open a Demat Account</Button>
                    </Card.Body>
                </Card>

                <div className='d-flex justify-content-between align-items-center my-4'>
                    <div>
                        <h4>Ongoing</h4>
                        <small>Companies where the IPO investment process is started and will be listed soon in the stock market for regular trading.</small>
                    </div>
                    <div className="upcoming">
                        <button className='btn btn-primary'>View All</button>
                    </div>
                </div>
                <div className="ongoing row d-flex">
                    <Card className="col-lg-4">
                        <Card.Body>
                            <Card.Title>Nova Agritech Ltd.</Card.Title>
                            <div className="items">
                                <div className='d-flex justify-content-between align-items-center text-start'>
                                    <span>PRICE BAND</span>
                                    <span>OPEN</span>
                                    <span>CLOSE</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span>ISSUE SIZE</span>
                                    <span>ISSUE TYPE</span>
                                    <span>LISTING DATE</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className='d-flex justify-content-between align-items-center my-4'>
                    <div>
                        <h4>New Listed</h4>
                        <small>Companies that have been listed recently through an IPO. Find their listing gains and returns here.</small>
                    </div>
                    <div className="upcoming">
                        <button className='btn btn-primary'>View All</button>
                    </div>
                </div>
                
                <div className='my-3 d-flex overflow-auto'>
                    {ipo.map((ipos) => {
                        return (
                            <Card className="m-2 p-2 col-md-8 col-lg-5" key={ipos._id}>
                                <Card.Body>
                                    <Card.Title className='text-truncate'>{ipos.company}</Card.Title>
                                    <div className="items">
                                        <div className='row'>
                                            <ul className='nav px-3 my-2'>
                                                <li className="col nav-item">PRICE BAND <br/>{ipos.ipo_fees}</li>
                                                <li className="col nav-item">OPEN <br/>{ipos.profit}</li>
                                                <li className="col nav-item">CLOSE <br/>{ipos.assets}</li>
                                            </ul>
                                        </div>
                                        <div className='row'>
                                            <ul className="nav px-3">
                                                <span className="col nav-item">ISSUE SIZE <br/>{ipos.ipo_price}</span>
                                                <span className="col nav-item">ISSUE TYPE <br/>{ipos.industry}</span>
                                                <span className="col nav-item">LISTING DATE <br/>{ipos.ipo_date}</span>
                                            </ul>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>

                <hr/>

                <div className='row d-flex justify-content-between'>
                    <Card className='my-4 shadow rounded-1 col-lg-5 col-md-5 col-sm-12'>
                        <Card.Body>
                            <Card.Title>IPO News</Card.Title>
                            <Card.Text>news 1</Card.Text>
                            <Card.Text>news 2</Card.Text>
                            <Card.Text>news 3</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='my-4 shadow rounded-1 col-lg-5 col-md-5 col-sm-12'>
                        <Card.Body>
                            <Card.Title>IPO News</Card.Title>
                            <Card.Text>news 1</Card.Text>
                            <Card.Text>news 2</Card.Text>
                            <Card.Text>news 3</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="faq">
                    <div className='my-4'>
                        <h4>Frequently Asked Questions?</h4>
                        <small>Find answers to common questions that come in your mind related to IPO.</small>
                    </div>

                    <Accordion defaultActiveKey="0" className='my-4'>
                        <Accordion.Item eventKey="0" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="accord">What is an IPO?</Accordion.Header>
                            <Accordion.Body>
                                IPO or the Initial Public Offering is the first time a company issues its shares to the public. As an investor, you will now be able to subscribe for such shares, which was earlier open to only a specific lot of internal and institutional investors via opening a Demat account.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">How to invest in an IPO?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">What is the benefit of an IPO?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">What are the disadvantages of an IPO?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">What is the difference between book building issue and fixed price issue?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">Is it mandatory to have a PAN number to apply in an IPO?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="6" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">Where do I get an IPO application form?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">How one can apply in IPO’s online?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="8" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">How one can apply in IPO’s offline?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="9" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">Can a minor apply in an IPO?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="10" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">What is the procedure to withdraw from an IPO?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="11" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">How is IPO return calculated?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="12" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">Can one apply for an IPO from a sweep in/out saving bank account?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="13" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">What is the minimum and maximum investment one could do in the HNI category?</Accordion.Header>
                            <Accordion.Body>
                                Duis aute irure dolor in reprehenderit in voluptate velit. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="14" className='my-4 rounded-3 p-1 accord'>
                            <Accordion.Header className="rounded-3">How to apply more than one application in an IPO?</Accordion.Header>
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

export default IpoHomepage