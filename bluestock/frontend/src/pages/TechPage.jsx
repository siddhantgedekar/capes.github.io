import MarketFunction from '../marketfunction.png';
import Navbars from '../components/Navbars.jsx';
import StockMarket from '../stock_market.png';
import { Card } from 'react-bootstrap';
import Candlestick from '../candlestick.png';
import Tradingtech from '../tradingtech.png';
import MarketFlux from '../marketflux.png';
import Fibonacci from '../fibonacci.png';
import Analysis from '../analysis.png';
import Computer from '../computer.png';
import Meeting from '../meeting.png';
import Points from '../points.png';
import Board from '../board.png';
import Data from '../data.png';

const TechPage = () => {
  return (
    <div>
        <Navbars values={"IPO"} />
        
        <div className="container my-5">
            <a href="/" className='text-decoration-none'>Home</a>
            <a className='mx-2 text-decoration-none text-secondary'>&gt;</a>
            <a href='/stockschool' className='text-decoration-none'>Stock School</a>
            <a className='mx-2 text-decoration-none text-secondary'>&gt;</a>
            <a className='text-secondary text-decoration-none'>Technical Analysis</a>
        </div>

        <div className="large-caps bg-secondary-subtle py-4 px-3">
            <div className="row d-flex justify-content-between px-3">
                <div className="col-lg-7 col-md-7 col-12">
                    <h1 className='fw-bold'>Technical Analysis</h1>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                    <div className="red-square"></div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="d-flex justify-content-between align-items-center row my-4 mx-1">
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Data}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Basics of Technical analysis</p>
                        <small>Understand basics of chart patterns, candlesticks, indicators, volume,..</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="/technicalanalysis" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Board}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Candlesticks Charts & Patterns</p>
                        <small>Learn to read candlestick patterns and identify trends</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="/candlestick" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Candlestick}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Chart Patterns</p>
                        <small>Learn to predict future price movement with chart patterns</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Analysis}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold py-2'>Technical Indicators</p>
                        <small>Understand how to identify the trend's direction</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={StockMarket}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Magic of Moving Averages</p>
                        <small>Explore the types, uses, and application of moving averages</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Fibonacci}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>The World of Fibonacci</p>
                        <small>Explore Fibonacci tools for reliable technical analysis in trading</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Computer}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Basics of Elliott Wave</p>
                        <small>Learn the principles and patterns of Elliott Wave Theory</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Points}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Point and Figure Charts</p>
                        <small>Learn how to construct, analyse, and use Renko charts</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={MarketFunction}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold py-2'>Swing Trading</p>
                        <small>Discover the art and science of swing trading</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Meeting}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Intraday Trading</p>
                        <small>Explore effective trading strategies for intraday trading</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={Tradingtech}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Trading Psychology</p>
                        <small>Learn how to overcome psychological challenges and look into trading m...</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={MarketFlux}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Intermarket analysis</p>
                        <small>Learn about intermarket analysis to trade strategically and wisely</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
                <Card className='rounded-5 techpage-card col-lg-3 col-md-4 col-12 mx-1'>
                    <Card.Img variant="top" src={MarketFlux}  className='px-4 pt-3'/>
                    <Card.Body className='text-center p-0'>
                        <p className='fw-bold'>Intermarket analysis</p>
                        <small>Learn about intermarket analysis to trade strategically and wisely</small>
                    </Card.Body>
                    <hr/>
                    <small className='d-flex justify-content-between p-3'>
                        <Card.Text>{121324} &nbsp; Views</Card.Text>
                        <a href="#" className='text-decoration-none'>View Details &gt;&gt;</a>
                    </small>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default TechPage