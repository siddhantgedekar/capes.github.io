import { Breadcrumb, Form, InputGroup} from 'react-bootstrap';
import Navbars from '../components/Navbars';
import Stock from '../phone_image.png';
import QR from '../verify.png';
import StockRise from '../stockRise.png'
import psPlay from '../psPlay.jpg';
import psIOS from '../psIOS.jpg';

const Carreers = () => {
  return (
    <div className='carrers container'>
      <Navbars values={"PRODUCTS"}/>

      <Breadcrumb className="my-4 ">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Carrers</Breadcrumb.Item>
      </Breadcrumb>

      <div className="together row d-flex justify-content-between align-items-center">
        <div className="heading col-12 col-lg-6 col-md-6">
          <h2>Together, Let’s Build The Future Of Fintech !</h2>
          <small>Join Bluestock Fintech to create disruptive fin-tech products, while working from anywhere!</small><br/>
          <button className="btn btn-primary my-4 px-5">See Job Openings</button>
        </div>
        <div className='col-12 col-lg-6 col-md-6'>
          <img src={StockRise} alt="stockrise" className='col-12'/>
        </div>
      </div>

      <div className='row d-flex justify-content-start aling-items-start bg-primary rounded-3 py-2 m-2'>
        <div className="phone col-lg-4 col-md-6 col-5">
          <img src={Stock} alt="trading" className='col-12'/>
        </div>
        <div className='col-lg-3 col-md-6 col-5'>
          <h3 className='downloads my-5'>4.4 K + DOWNLOADS</h3>
        </div>
        <div className='col-lg-5 col-md-12 col-12'>
          <div className='text-white my-4'>
            <h1>Enjoy Free Learning, Analytics Club</h1>
          </div>
          <div className='row px-1'>
            <small className='text-white'>Get the link to download the App</small>
            <InputGroup className='py-1 inpBorder rounded-2 px-1 bg-white'>
              <Form.Control className='border-0'/>
              <InputGroup.Text className='btn bg-primary rounded-2 text-white fw-bold'>Send App Link</InputGroup.Text>
            </InputGroup  >
          </div>
          <div className='appLink my-3 d-flex justify-content-start row'>
            <div className='col-lg-3 col-md-3 col-6'>
              <img src={QR} alt="verify" className='rounded-3 col-12'/>
            </div>
            <div className="playstore col-lg-8 col-md-9 col-6 d-flex flex-column">
              <img src={psPlay} alt="android" className='my-1 col-12 col-lg-6 col-md-6 rounded-2'/>
              <img src={psIOS} alt="ios" className='my-1 col-12 col-lg-6 col-md-6 rounded-2'/>
            </div>
          </div>
        </div>
      </div>

      <div className="warning text-center py-5">
        All official communication with the HR team at Bluestock Fintech will be through <a href="mailto:" className='text-decoration-none'>hr@bluestock.in</a>
      </div>
    </div>
  )
}

export default Carreers;