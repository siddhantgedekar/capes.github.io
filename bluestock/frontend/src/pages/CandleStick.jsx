import { useState } from 'react'
import Navbars from '../components/Navbars'
import { Card, Button } from 'react-bootstrap'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const CandleStick = () => {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const handleLike = () => {
        setLike((like) => {return like+1});
    }
    const handleDislike = () => {
        setDislike((dislike) => {return dislike+1});
    }
  return (
    <div>
        <Navbars />
        <div className="container">
            <h1 className='my-5 fw-bold'>Candlestick Charts & Patterns</h1>
            <div className="content row d-flex justify-content-between">
                <div className="tech-left-menu col-lg-4">
                    <Card className='analysis-card rounded-4'>
                        <Card.Body>
                            <h2>Model Units</h2>
                            <ol>
                                <a href="#introduction" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Introduction</li>
                                    <p className='text-success'>&gt;</p>
                                </a>
                                <a href="#identitypattern" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Identity Patterns</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#hammer" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Hammer</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#invthammer" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Inverted Hammer</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#spinpattern" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Spinning Top Candlestick Patterns</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#shootingstar" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Shooting Star</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#marubuzo" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Marubuzo</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#doji" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>doji</li>
                                    <p>&gt;</p>
                                </a>
                            </ol>
                        </Card.Body>
                        <Card.Body className='d-flex justify-content-evenly align-items-center'>
                            <Button variant="danger" className='text-uppercase'>Game</Button>
                            <Button variant="primary" className='text-uppercase'>Quiz</Button>
                        </Card.Body>
                        <div className='text-center p-3'>
                            <a href="#" className='text-decoration-none text-primary-subtle'>View Leaderboard</a>
                        </div>
                    </Card>
                </div>
                <div className="tech-right-content col">
                    <div className="analysis-card p-4 rounded-4" id="introduction">
                        <h1 className='text-primary'>Introduction</h1>
                        <hr />
                        <div className='bg-secondary-subtle rounded-4 tech-image my-4'>
                            <img src="some_image" alt="someimage" />
                        </div>
                        <p>
                            This module introduces the most popular chart pattern in technical analysis, which is Candlesticks. This type of chart pattern is used by many traders across the world to predict the price action movements on various financial securities. So, here in this module, we will dive into the world of candlesticks' patterns. Yes, there are several patterns that suggest a particular move in the price of a security that can be either bullish, bearish or even sideways.
                            <br/>
                            <br/>
                            So, without any further ado, let's start learning the candlesticks pattern and decode the complexities of it in a simple way
                            <br/>
                            <br/>
                            <b>What are candlestick charts?</b>
                            <br/>
                            Japanese candlestick is the oldest type of trading technique that is used to analyse the future price movement. In the 1700s, the candlestick charts were used to predict rice prices. In 1750, Munehisa Homma a Japanese merchant started using his candlestick analysis for trading at the Rice exchange at Sakata. 
                            Candlesticks are one of the most efficient ways to analyse the change in the prices of an asset. It depicts the trader's psychology with utmost clarity, in comparison to other forms of charting.
                            <br/>
                            <br/>
                            <b>How to read candlestick Charts?</b>
                            <br/>
                            Candlestick charts are two dimensional charts having a real body, upper shadow and a lower shadow.
                            <br/>
                            <br/>
                            <div className="candle-img row d-flex jusity-content-center">
                                <div className="col-6 stick-head m-auto my-5">
                                    <div className="candle bg-danger">
                                        <div className="stick bg-danger"></div>
                                    </div>
                                </div>
                                <div className="col-6 stick-head m-auto my-5">
                                    <div className="candle bg-success">
                                        <div className="stick bg-success"></div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <b>Real body: </b>
                            &nbsp;It represents the range between that session's opening and closing. When the real body is black or Red, it means the closing price of the session was lower than the opening price. If the real body is white or green or blue, it means the close was higher than the open.
                            <br/>
                            <br/>
                            <b>Shadows: </b>
                            &nbsp;The thin lines above and below the real body are the shadows. These shadows represent the session's price extremes. The shadow above the real body is called the upper shadow and the shadow under the real body is known as the lower shadow. Accordingly, the peak of the upper shadow is the high of the session and the bottom of the lower shadow is the low of the session.
                            <br/>
                            <br/>
                            <b>Open Price </b>
                            <ul>
                                <li>The top or the bottom of the candlestick represents the opening price.</li>
                                <li>If the opening price of the asset is more than then the closing price, then the open will be at the top of the candlestick body.</li>
                                <li>This shows that the prices were in a downtrend and the colour of the candlestick will be either red or black.</li>
                                <li>If the opening price of the asset is less than then the closing price, then the open price will be at the bottom of the candlestick body.</li>
                                <li>This shows that the prices were in an uptrend in that timeframe and the colour of the candlestick will be either green, blue or white.</li>
                            </ul>
                            <br/>
                            <b>Close Price</b>
                            <ul>
                                <li>Similarly, like the opening price, the closing price is either at the top or bottom of the candlestick body. If the closing price is more than the opening price, then the close will be at the top of the candlestick body.</li>
                                <li>This shows that the prices were in an uptrend in that time frame and the colour of the candlestick will be green, blue or white.</li>
                                <li>If the closing price is less than the opening price, then the close will be at the bottom of the candlestick body.</li>
                                <li>This shows that the prices were in a downtrend in that time frame and the colour of the candlestick will be red or black.</li>
                            </ul>
                            <b>High Price</b>
                            <ul>
                                <li>The high price during the specified timeframe is indicated by the top of the shadow above the body.</li>
                                <li>There will be no upper shadow if the open or close was the highest price.</li>
                            </ul>
                            <br/>
                            <b>Low Price</b>
                            <ul>
                                <li>The low price during the specified time frame is indicated by the bottom of the shadow below the body.</li>
                                <li>There will be no lower shadow if the open or close was the lowest price.</li>
                            </ul>
                            <br />
                            <br />
                            <b>Why do most traders prefer Candlestick Charts?</b>
                            <br />
                            Most traders prefer using candlestick charts because:
                            <ul>
                                <li>Each candlestick shows the important price data points: Open, High, Low and Close. They are purely price movements.</li>
                                <li>It depicts trading and market psychology</li>
                                <li>Identifies Bullish Reversal Signals & Bearish Reversal Signals</li>
                                <li>It also identifies Continuation Trends</li>
                                <li>They are two dimensional figures so they are easy to understand</li>
                                <li>Patterns have been Identified which have a predictive Value</li>
                                <li>Candlesticks like Bar Charts show price movements, and they also reveal the force of the current move</li>
                                <li>It has the ability to highlight trend weakness and reversal signals that may not be apparent on a normal bar chart.</li>
                            </ul>
                            <br/>
                            <b>Note: </b>
                            &nbsp;From this section, we have learned the basics of candlesticks and how to read a candlestick chart. But there are several candlesticks patterns that need to be identified for technical analysis. We will learn the art of identifying candlestick patterns in the next unit.
                        </p>
                        <hr/>
                        <div className="like-section">
                            <h2 className='fw-bold text-center'>Did you like this unit?</h2>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className='btn btn-primary rounded-circle mx-2' onClick={handleLike}>
                                    <BiLike />
                                </button>
                                    {like}
                                <button className='btn btn-danger rounded-circle mx-2' onClick={handleDislike}>
                                    <BiDislike />
                                </button>
                                    {dislike}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CandleStick