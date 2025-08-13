import { Card } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

const Products = () => {
  return (
    <div>
      <Navbars values={"IPO"}/>
      <div className="tech-platform row my-5 d-flex px-5 mx-1">
        <div className='col-12 col-lg-4 col-md-6 my-5'>
          <h1>Best-in-class Technology & Platforms</h1>
          <small>Our products & services aim to help active traders & investors in India gain a winning edge in the stock markets.</small>
        </div>
        <div className='someImage col-12 col-lg-4 col-md-6'></div>
      </div>

      <div className="container diversity rounded-3 my-5">
        <div className='p-3 row'>
          <h1>
            Diversify Your Portfolio Today!
          </h1>
          <small className='col-12 col-lg-6 col-md-6'>
            Start your investment journey with our user-friendly and secure investment platforms.
          </small>
        </div>
      </div>

      <div className='container ipoBoxes my-5'>
        <div className='row d-flex'>
          <Card className='col-12 col-lg-4 col-md-4 my-3 mx-2'>
            <Card.Body>
              <div className="box box0 rounded-2"></div>
              <h5 className='my-2'>Bluestock IPO</h5>
              <Card.Text>
                Be the first to apply for IPOs and FPOs listed on the NSE and BSE.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='col-12 col-lg-4 col-md-4 my-3 mx-2'>
            <Card.Body>
              <div className="box box1 rounded-2"></div>
              <h5 className='my-2'>Bluestock IPO</h5>
              <Card.Text>
                Be the first to apply for IPOs and FPOs listed on the NSE and BSE.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='col-12 col-lg-4 col-md-4 my-3 mx-2'>
            <Card.Body>
              <div className="box box2 rounded-2"></div>
              <h5 className='my-2'>Bluestock IPO</h5>
              <Card.Text>
                Be the first to apply for IPOs and FPOs listed on the NSE and BSE.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="growth container rounded-3 my-4">
          <div className='p-3 row'>
            <h1>
              Grow Your Network and Learn the Stock Market
            </h1>
            <small className='col-12 col-lg-6 col-md-6'>
              Our community-based approach encourages you to learn from experts and peers while expanding your connections.
            </small>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className='row d-flex'>
          <Card className='col-12 col-lg-4 col-md-4 mx-2'>
            <Card.Body>
              <div className="box box1 rounded-2"></div>
              <h5 className='my-2'>Bluestock IPO</h5>
              <Card.Text>
                Be the first to apply for IPOs and FPOs listed on the NSE and BSE.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='col-12 col-lg-4 col-md-4 mx-2'>
            <Card.Body>
              <div className="box box2 rounded-2"></div>
              <h5 className='my-2'>Bluestock IPO</h5>
              <Card.Text>
                Be the first to apply for IPOs and FPOs listed on the NSE and BSE.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="growth container rounded-3 my-4">
        <div className='p-3 row'>
          <h1>
            Make your platform more powerful
          </h1>
          <small className='col-12 col-lg-6 col-md-6'>
            Integrate with our in-house trading platform and build your own customized trading applications.
          </small>
        </div>
      </div>

      <div className="container my-4">
        <div className='row d-flex'>
          <Card className='col-12 col-lg-4 col-md-4 mx-2'>
            <Card.Body>
              <div className="box box1 rounded-2"></div>
              <h5 className='my-2'>Bluestock IPO</h5>
              <Card.Text>
                Be the first to apply for IPOs and FPOs listed on the NSE and BSE.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Products