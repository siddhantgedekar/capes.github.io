import { Button, InputGroup, Form, Carousel, Card, Stack, Dropdown } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Analysis from '../analytics.png';
import { CiStar } from "react-icons/ci";
import Compare from '../compare.png';
import Verify from '../verify.png';
import psPlay from '../psPlay.jpg';
import psIOS from '../psIOS.jpg';
import Video from '../video.png';
import SS from '../tradeImg.jpg';
import Blog from '../blogs.png';
const HomePage = () => {
  
  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="left col-lg-6 col-md-6 col-sm-12 mt-3">

          <div className="w-100">
            <a href='/' className='text-decoration-none'>
              <span className="bg-success rounded-1 text-white px-3 py-0">NEW</span>
              <span className="text-dark mx-1">App 2.0 <FaArrowRight /></span>
            </a>
          </div>

          <div className="w-auto mt-3">
            <h3 className=" fw-bold">Free & Open</h3>
            <h3 className=" fw-bold">Stock Market Analytics</h3>
            <h3 className=" fw-bold">For GenZ</h3>
            <small className="fw-normal text-secondary">Thousands of traders and investors in India use our stable and reliable mobile app regularly</small>
          </div>

          <div className="mt-2 d-flex flex-column bg-none col-lg-6 col-md-8 col-sm-8">
            <label className="my-2">Get early Access</label>
            <InputGroup size="sm" className="shadow mb-3 mx-2">
              <InputGroup.Text className="bg-transparent border-0">+91</InputGroup.Text>
              <Form.Control type="text" placeholder="Enter mobile number" className="py-1 border-0"/>
              <InputGroup.Text className="bg-transparent border-0">
                <Button className="btn btn-primary text-white py-1 px-2"><IoIosSend /></Button>
              </InputGroup.Text>
            </InputGroup>
          </div>

        </div>
        <div className="right col-lg-6 col-md-6 col-sm-12">
          <img src="/" alt="some_image" className="w-auto"/>
        </div>

      </div>

      <div className="row mb-3 mx-4 d-flex justify-content-between align-items-center">
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='mb-4 text-secondary'>Built for a growing India.</p>
            <h5 className="fw-bold gradient">It's easy</h5>
            <h5 className="fw-bold">It's powerful</h5>
            <h5 className="fw-bold gradient">It's beautiful</h5>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb-3 text-center text-secondary d-flex justify-content-center flex-column align-items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/456/456115.png" alt="like_img" className="mb-3 col-lg-2 col-md-2 col-sm-2"/>
            <b className="text-dark">Beautifyl UI</b> for the modern trader, with access to all platform to <b className="text-dark">on the go.</b>
          </div>
      </div>
      {/* Highlights Part */}
      <div className="text-center text-secondary mb-3">
        <small>Power-packed with everything you need.</small>
        <h3 className="fw-bold my-2 text-dark">Bluestock Highlights</h3>
        <small>
          Simplified enough for beginner, Detailed enough for experts.<br/>Track upcoming IPOs, Leverage advanced tools to <br/> make the best decision.
        </small>
      </div>

      <div className="charts d-flex justify-content-evenly row mx-2">
        <div className="learnChart px-3 py-1 my-3 col-lg-3 col-md-3 col-xs-1 h">
          <div>
            <h5 className="fw-bold text-primary border-bottom pb-1 mb-4">Learn Chart</h5>
          </div>

          <span className="mb-3 d-flex">
            <div className='circle'>1</div>
            <div className='px-2 fw-bold'>Technical, Fundamental</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>2</div>
            <div className='px-2 fw-bold'>Finology, Facts, Equity</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>3</div>
            <div className='px-2 fw-bold'>Trading Psychology</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>4</div>
            <div className='px-2 fw-bold'>Risk Assessment</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>5</div>
            <div className='px-2 fw-bold'>Option Trading</div>
          </span>
        </div>

        <div className="analytics px-3 py-1 my-3 col-lg-3 col-md-3 col-xs-1 h">
          <div>
            <h5 className="fw-bold text-primary border-bottom pb-1 mb-4">Analytics</h5>
          </div>

          <span className="mb-3 d-flex">
            <div className='circle'>1</div>
            <div className='px-2 fw-bold'>Live Sector Trend</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>2</div>
            <div className='px-2 fw-bold'>IPO DRHP</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>3</div>
            <div className='px-2 fw-bold'>Sectoral Distribution</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>4</div>
            <div className='px-2 fw-bold'>Stock Overview</div>
          </span>
          <span className="mb-3 d-flex">
            <div className='circle'>5</div>
            <div className='px-2 fw-bold'>TradingView Chart</div>
          </span>
        </div>

        <div className="clubChart px-3 py-1 my-3 col-lg-3 col-md-3 col-xs-1 h">
          <div>
            <h5 className="fw-bold text-primary border-bottom pb-1">Learn Chart</h5>
          </div>

          <span className="mb-3 d-flex">
            <div className='circle'>1</div>
            <div className='px-2 fw-bold'>Education Resources</div>
          </span>

          <span className="mb-3 d-flex">
            <div className='circle'>2</div>
            <div className='px-2 fw-bold'>Real-time Chart</div>
          </span>

          <span className="mb-3 d-flex">
            <div className='circle'>3</div>
            <div className='px-2 fw-bold'>Forums</div>
          </span>
        </div>
      </div>

      <div className="reason row d-flex justify-content-between my-5">
        <div className='col-lg-7 col-md-7 col-xs-12 row'>
          <h5 className='fw-bold'>Why do traders love bluestock?</h5>
          <small className='text-secondary col-lg-6 col-md-10'>
            Bluestock caters to traders looking to enhance 
            their technical analysis skills, providing a user-friendly
            environment to interpret and leverage charts effectively
            for strategic decision-making in the financial markets.
          </small>
        </div>

        <div className="col-lg-5 col-md-5 col-xs-12 image m-auto">
          <div className="fw-bold text-white text-center">Shark <br/> Investor</div>
        </div>
      </div>

      <div className='resource row'>
        <div className='left col-lg-6 col-md-6 d-flex justify-content-between my-2'>
          <img src={Analysis} alt="analysis" className='col-3 rounded-4 c mx-2'/>
          <img src={Blog} alt="blog" className='col-3 rounded-4 c1 mx-2'/>
          <img src={Video} alt="video" className='col-3 rounded-4 c2 mx-2'/>
        </div>

        <div className="right col-lg-6 col-md-6">
          <small className='bg-info px-2 rounded'>Resources</small>
          <h4 className="fw-bold">All things finance,right here</h4>
          <small className="text-secondary">Master the art of investing and secure your financial future with Bluestock learning resources.</small>
        </div>
      </div>

      <div className="onthego row d-flex justify-content-between my-3">
        <div className="left col-lg-9 col-md-8 col-sm-12">
          <div className="contain col-lg-6 col-md-12 col-sm-4">
            <h4>On the go</h4>
            <small className="text-secondary">
              We believe that everyone should be able to wield technology while learn trading. Use Bluestock on the go, on your mobile device. Experience the ultimate trading experience on Android or IOS.
            </small>
          </div>

          <div className="verify my-3 d-flex justify-content-start align-items-center">
            <img src={Verify} alt="verify" className='col-3 col-md-3'/>

            <div className='text-primary fw-bold'>
              Scan and download <br/>
              <small className="text-secondary fw-normal">Use your android device to download the app</small>
            </div>
          </div>
        </div>

        <div className="right col-lg-3 col-md-4 col-sm-12">
          <img src={SS} alt="tradeImg" className="col-12 p-4 col-sm-12 col-md-12 col-lg-12"/>
        </div>
      </div>

      <div className="live-section my-3 px-5 py-3 row d-flex justify-content-between align-items-center">
        <section className="live-section-cover col-lg-5 col-md-12">
          <h3 className="live text-primary fw-bold text-center">Bluestock App 2.0 <strong className='text-dark'>is Live Now!</strong></h3>
        </section>

        <small className="text-secondary col-lg-3 col-md-12 text-center">Download Our App</small>

        <div className="playstore col-lg-4 col-md-12 d-flex justify-content-center">
          <div className='mx-2 col-lg-3 col-md-2'>
            <a href="https://play.google.com/store/apps/details?id=in.bluestock.app&pcampaignid=web_share" target='_blank'>
              <img src={psPlay} alt="playstore" className='mx-2 col-12'/>
            </a>
          </div>
          <div className='mx-2 col-lg-3 col-md-2'>
            <a href="https://apps.apple.com/app/idYOUR_APP_ID" target='_blank'>
              <img src={psIOS} alt="ios" className='mx-2 col-12'/>
            </a>
          </div>
        </div>
      </div>

      <div className="rating d-flex justify-content-center align-items-center my-4">

        <div className="circleFace rounded-circle">
          <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp" alt="user" className="w-100"/>
        </div>
        <div className="circleFace rounded-circle">
          <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp" alt="user" className="w-100"/>
        </div>
        <div className="circleFace rounded-circle">
          <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp" alt="user" className="w-100"/>
        </div>
        <div className="circleFace rounded-circle">
          <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp" alt="user" className="w-100"/>
        </div>
        
        <div><CiStar className='stars'/><CiStar /><CiStar /><CiStar /><CiStar /></div>
      </div>

      <div className="users">
        <div className="slider d-flex justify-content-between">
          <h3>What do our users say?</h3>
          <section>
            <Button variant='primary'>Left</Button>
            <Button variant='primary'>Right</Button>
          </section>
        </div>

        <Carousel>
          <Carousel.Item className="my-4" Control={true}>
            <Stack gap={3} direction='horizontal'>
              <Card>
                <Card.Body>
                  <Card.Title>Venketash</Card.Title>
                  <Card.Text>
                    Excellent app with a fantastic UI! 🤩 Even though the app is still in progressive mode, I must say it is getting better every day. It has an amazing user interface.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Sarthak</Card.Title>
                  <Card.Text>
                    Bluestock app provides a user-friendly interface 📈The clean design and intuitive navigation enhance the overall experience.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Sakshi</Card.Title>
                  <Card.Text>
                    BlueStock for chart learning & technical and it has exceeded my expectations. The UI is well-designed, making it a breeze to navigate and learn charts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item className="my-4" Control={true}>
            <Stack gap={3} direction='horizontal'>
              <Card>
                <Card.Body>
                  <Card.Title>Venketash</Card.Title>
                  <Card.Text>
                    Excellent app with a fantastic UI! 🤩 Even though the app is still in progressive mode, I must say it is getting better every day. It has an amazing user interface.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Sarthak</Card.Title>
                  <Card.Text>
                    Bluestock app provides a user-friendly interface 📈The clean design and intuitive navigation enhance the overall experience.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Sakshi</Card.Title>
                  <Card.Text>
                    BlueStock for chart learning & technical and it has exceeded my expectations. The UI is well-designed, making it a breeze to navigate and learn charts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="market-movers my-3">
        <div className="movers mb-5">
          <h4>Market Movers</h4>
          <h6>Learn about Stock market updates today - 52 Week Highs, 52 week Lows and more.</h6>
        </div>

        <div className="market row d-flex justify-content-between align-items-center">
          <div className="high py-2 shadow col-lg-5 col-md-10 col-sm-12">
            <div className='heading'>
              52 Week High
            </div>
            <div className="content d-flex justify-content-between c5">
              <section className='text-primary'>COMPANY <small className='text-secondary'>Rs</small></section>
              <section className='text-primary'>PRICE <small className='text-secondary'>Rs</small></section>
              <section className='text-primary'>DAY HIGH <small className='text-secondary'>Rs</small></section>
            </div>
          </div>

          <div className="low py-2 shadow col-lg-5 col-md-10 col-sm-12">
            <div className="heading">
              52 Week Low
            </div>
            <div className="content d-flex justify-content-between c5">
              <section className='text-primary'>COMPANY <small className='text-secondary'>Rs</small></section>
              <section className='text-primary'>PRICE <small className='text-secondary'>Rs</small></section>
              <section className='text-primary'>DAY HIGH <small className='text-secondary'>Rs</small></section>
            </div>
          </div>
        </div>
      </div>

      <div className="compare row d-flex justify-content-between">

        <div className="stocks col-lg-6 col-md-6 col-sm-12">
          <h5 className='fw-bold'>Compare and choose</h5>
          <h3 className='text-primary '>Best Stock Broker for you</h3>

          <div className="dropdown-1 d-flex justify-content-between align-items-center px-5 my-3">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic"  className="dropdown1">Angle One</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic1" className='dropdown1'>Zerodha</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
                <Dropdown.Item eventKey="X">stock</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-primary px-5 py-1'>Compare</button>
          </div>
        </div>

        <div className="compare-image col-lg-6 col-md-6 col-sm-12">
          <img src={Compare} alt="compare" className='col-12 p-3'/>
        </div>
      </div>

    </div>
  )
}

export default HomePage;