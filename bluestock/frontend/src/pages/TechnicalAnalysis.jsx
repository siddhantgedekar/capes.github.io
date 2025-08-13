import Consolidate from '../consolidate.png'
// reversal pattern start
// import Hammer from '../hammer.jpg'
import Shootingstar from '../shootingstar.jpg'
import InvtHammer from '../inverthammer.jpg'
import Hangman from '../hangingman.jpg'
import Bulish from '../bulish.png'
import Berish from '../berish.png'
import Piercepattern from '../piercepattern.png'
import Cloudcover from '../cloudcover.png'
import Doji from '../doji.png'
// reversal pattern end
// technical indicator start
import Sma from '../sma.png'
import Rsi from '../rsi.png'
import Adx from '../adx.jpg'
// technical indicator end
import Wedge from '../wedge.png'
import Flagpenant from '../flagpenant.png'
import Triangle from '../triangle.png'
import Tripletb from '../tripletb.jpg'
import Doubletb from '../doubletb.png'
import Inversehs from '../inversehs.jpg'
import Range from '../range.png'
import Channelpattern from '../channelpattern.jpg'
import Resistline from '../resistline.jpg'
import Downtrend from '../downtrend.png'
import Uptrend1 from '../uptrend1.png'
import Linechart from '../linechart.png'
import Statistic from '../statistic.png';
import Candle from '../candle.png'
import JCandle from '../jcandle.png'
import Uptrend from '../uptrend.png'
import Reversal from '../reversal.png'
import { useState } from 'react';
import Navbars from '../components/Navbars';
import { Card, Button } from 'react-bootstrap';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const TechnicalAnalysis = () => {
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
            <h1 className='my-5 fw-bold'>Basics of Technical Analysis</h1>
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
                                <a href="#typesofcharts" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Types of Charts</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#trends" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Trends</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#volume" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Volume</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#chartpatterns" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Classical Chart Patterns</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#reversalpatterns" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Candlestick Reversal Patterns</li>
                                    <p>&gt;</p>
                                </a>
                                <a href="#techindicators" className='text-decoration-none text-dark d-flex justify-content-between align-items-center'>
                                    <li>Technical Indicators</li>
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
                            Market analysis is broadly categorized into two main methods, the first one is fundamental analysis and the second one is technical analysis. In fundamental analysis, an analyst needs to look at the financial statements of a company, its business model, overall macroeconomic scenarios, management capabilities, and many more things for finding a specific fair value of a company. On the other hand, technical analysis is not at all concerned with this detailed study of fundamental factors. On the contrary, a technical analyst only looks at the price of a stock derived as a result of supply- demand interaction. For a technical analysts' price is supreme and he or she sees price as a manifestation of every fundamental reality. Hence, they look only at two main aspects of the market. Price -over-time and volume.
                            <br/>
                            <br/>
                            The entire discipline of technical analysis is based on these two data points, price over time and volume. All patterns, indicators, concepts are derived from these two basic data points. Technical analysis is a very interesting subject. This is not a definitive science, rather a probabilistic discipline. In simple terms, it is more of an art than science. There are well-known chart patterns or indicators in the market. But nothing works 100% of the time. We still follow them because they work more number of times than they fail. Hence emerged the concept of probability, the number of times anything works among the number of times that occur. This ratio is different in different stocks in different phases. That is why it is called an art. With experience, a chartist is able to form an opinion of his or her own so that he has some extra edge on the market assessment than someone having just bookish knowledge of technical analysis. This basic module on technical analysis is your stepping stone towards the journey to becoming a seasoned technical analyst. We request you to go through the concept slowly one at a time and keep observing charts on a regular basis. Look at old charts and also look at contemporary live charts. Once you find a pattern or some indicator try to predict the future move and note down your prediction. Then as time flows try to match the price action with your prediction. Then analyze why it worked or not worked. Make notes and progress with the module and the notes. This is a long journey and we wish you the best of luck.
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
                    <div className="analysis-card p-4 rounded-4 mt-5" id="typesofcharts">
                        <h1 className='text-primary'>Types of Charts</h1>
                        <hr />
                        <p>
                            Earlier, we were introduced to the basic concept of technical analysis. Chart reading is a primary step for studying technical analysis. In this unit, we will discuss the different types of charts.
                            <br/>
                            <br/>
                            Charts are a two-dimensional representation of price over time. There are different types of charts available. But most popular and widely used among them are Line Charts, Bar Charts, and the Candlestick Charts. The X-axis, Le. the time axis is crucial. The unit can be month, week, day, hour, 5 min, or a few seconds. The shorter the time period, the more detailed the chart becomes. The beauty of time in technical analysis is that the same concepts. apply to charts irrespective of the time-frame of observation. However, the success rate of individual patterns or indicators-based decisions may vary across time frames. Generally higher the time frame of the chart, relatively higher is the probability of any concept in the market.
                            <br/>
                            <br/>
                            <b>Line Charts</b>
                            <br/>
                            In line chart, each and every price point is represented as a dot. The X-axis represents the time scale and the Y-axis represents the price. Each dot or point represents the closing price at the end of a unit of time. These points are then joined to form a line. This is the simplest form of a chart. But this is quite good if we want to plot 3-4 similarly priced stocks in a single chart and compare. Moreover, the line chart gives the clearest idea about the price direction of a stock. Here is an example of Line chart:
                            <br/>
                            <img src={Linechart} alt="linechart" className='w-25 my-3'/>
                            <br/>
                            <b>Bar Charts</b>
                            <br/>
                            A bar chart is comprised of a series of bars. Every bar has four important price points - open, close, high and low. The bars are represented in green or blue color when close is higher than open and red color when the close is lower than open. The bar charts are more detailed than the line chart and are good for demonstrating or spotting the classical price patterns. We will discuss the classical chart patterns in appropriate time.
                            Here is an example of Bar chart:

                            <br/>
                            <img src={Statistic} alt="linechart" className='w-25 my-3'/>
                            <br/>
                            <b>Candlestick Chart</b>
                            <br/>
                            The concept of candlestick charts came from Japan. That is why they are often referred to as Japanese candlestick charts. These charts are the most versatile and popular form of chart representation. Price behavior during each time unit is represented in the form of a candle. If the closing price of a stock is higher than the open price during a particular time period, then the candle is green or blue, if the close price is below the open price then the candle is red. Each candle has a body and two wicks. The distance between open to close is represented by the body of a candle and the upper and lower wicks represent the highs and lows of a candle.
                            <br/>
                            <br/>
                            <b>Note: </b> A Bullish candle can be represented in green, blue or un-filled (white) colour. A Bearish candle can be represented in red or filled (black) colour. It must be assumed here we are using blue as bullish candle and red as bearish candle for our study in all the candlesticks charts.
                            <br/>
                            <img src={Candle} alt="linechart" className='w-25 my-3'/>
                            <br/>
                            Candlestick chart is special not only because it adds a special visual clarity about the price action, but also because often a single candlestick or two or three consecutive candlesticks together form a pattern that Indicates the reversal of a prior move or give conviction on the continuation of the ongoing move. These are called candlestick patterns. We will discuss them in due course of time. Here is an example of Candlesticks chart:
                            <br/>
                            <img src={JCandle} alt="linechart" className='w-25 my-3'/>
                            <br/>
                            <b>Note: </b> There is another type of chart named Point & Figure. Due to the complexities of understanding the concept, we have prepared a separate module. <a href="#" className='text-decoration-none'>Click the link to visit the module.</a>
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
                    <div className="analysis-card p-4 rounded-4 mt-5" id="trends">
                        <h1 className='text-primary'>Trends</h1>
                        <hr />
                        <p>
                            Stock prices always move in trends. After learning the different types of technical charts, in this section, we will discuss the different types of market trends.
                            <br/>
                            <br/>
                            <b>Market Trend and Range-Bound Consolidation</b>
                            <br/>
                            Often market movements happen in the form of trends. A price trend is a continuous or a directional price movement in upward or downward direction. We call them uptrend and downtrend respectively. Now if we look at price action in the market through charts, we will find that no price movement happens in a straight line.
                            <br/>
                            <br/>
                            Suppose we are looking at a broader uptrend represented as primary move, we may find Intermediate corrections represented as a secondary trend and minor counter moves among the secondary moves represented as minor trend. This is how the market behaves generally in both the up and the downtrends. 
                            <br/>
                            <br/>
                            Here is an example of Market Trends:
                            <br/>
                            <br/>
                            <img src={Uptrend} alt="uptrend" className='w-75' />
                            <br/>
                            Often an uptrend is represented in the form of a sequence of higher highs and higher lows. Similarly, a downtrend is represented as a sequence of lower lows and lower highs. A trend is said to reverse when the sequence is broken.
                            <br/>
                            Here is an example of Trend Reversal:
                            <br/>
                            <br/>
                            <img src={Reversal} alt="uptrend" className='w-75' />
                            <br/>
                            <br/>
                            We should remember a simple point that the market is not trending all the time. Often the market consolidates within a small range and goes nowhere. Then suddenly it can break on the upside or downside. Here is an example of Market Consolidation:
                            <br/>
                            <br/>
                            <img src={Consolidate} alt="uptrend" className='w-75' />
                            <br/>
                            <br/>
                            <b>Trendline & Channels</b>
                            <br/>
                            <br/>
                            Trendline and Channels are one of the most simple and useful tools in the market. During an uptrend, a trendline is formed by joining the lowest points of periodic pull-backs, defined as secondary moves in the previous section. The up-trend line has a positive slope. To be precise we need two lows to join to form. a trendline during an up-move. This line is then extended in the upward direction: the third move towards the trend-line is used to validate the trend line. If the trend line is not broken in the pullback, then it is called trend- line validation. It is often observed that price pulis back towards the trend line and moves higher. In an up-trending market, it is often easier to make money if one buys near the trend line and sells higher. The more number of time the trend-line is validated, the more important it becomes. An upward trend line is said to be the area of support. The selling pressure meets the buying pressure here and eventually, overtime when buying pressure is higher than selling pressure price sees on upward bounce.
                            <br/>
                            Here is an example of an Uptrend:
                            <br/>
                            <br/>
                            <img src={Uptrend1} alt="uptrend" className='w-75' />
                            <br/>
                            <br/>
                            Now when one buys he or she is looking for the prices to move higher. But this may or may not happen. Hence the investor should maintain a stop-loss point below which he or she should cut his or her position, Le. book loss. 
                            <br/>
                            <br/>
                            When a trend line is broken, either the market may reverse the trend, continue the uptrend with little less force or just go sideways 
                            <br/>
                            <br/>
                            Here is an example of Uptrend Reversal:
                            <br/>
                            <br/>
                            <img src={Reversal} alt="uptrend" className='w-75' />
                            <br/>
                            <br/>
                            Similarly, during a down-trend a trendline is formed by joining pull-back highs. They slope downwards. Just like an up-trend line a down-trend line is formed by joining two points and then extended in a downward direction. Pullbacks towards the trend-lines are low-risk points for short selling with a stop loss little above the trend line. The more times the line is validated, the more it grows in 
                            <br/>
                            <br/>
                            importance Here is an example of Downtrend:
                            <br/>
                            <br/>
                            <img src={Downtrend} alt="downtrend" className='w-75' />
                            <br/>
                            <br/>
                            Similar to an uptrend-line, when a down trending line is broken the trend may continue with less pace, or reverse or may go side-ways. area A downward trend line is said to be the of resistance. The selling pressure meets the buying pressure here and eventually, over time, when selling pressure is higher than buying pressure price, sees a decline. 
                            <br/>
                            <br/>
                            <b>Role Reversal</b>
                            <br/>
                            Once a trendline support or resistance is broken, its role is reversed. If the price falls below a support line, that line will become resistant. if the price rises above a resistance line, it will often become support. As the price moves past a line of support or resistance, it is considered that supply and demand have shifted, causing the breached line to reverse its role. For a true reversal to occur, however, it is important that the prices make a strong move through either the support or resistance line.
                            <br/>
                            <br/>
                            <img src={Resistline} alt="resistline" className='w-75' />
                            <br/>
                            <br/>
                            <b>Channels</b>
                            <br/>
                            The concept of a channel is much similar to trend lines. When in an uptrend or in a downtrend or in consolidation, we see thythmic movement in the form of a parallelogram, we can draw channels. The channel boundaries are good points for reversal trades with small stop losses. <br/><br/>Here is an example of Channels:
                            <br/>
                            <br/>
                            <img src={Channelpattern} alt="channelpattern" className='w-75' />
                            <br/>
                            <br/>
                            Once the price is out of the channel, the trend or range of the stock is broken.
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
                    <div className="analysis-card p-4 rounded-4 mt-5" id="volume">
                        <h1 className='text-primary'>Volume</h1>
                        <hr />
                        <p>
                            In this section, we introduce the second aspect of charting. This is called volume. Traded volume is the number of quantities a stock has changed hands. The volume is shown as a subgraph in the price-time chart, below the price window. Higher the volume in any particular move, the greater is the conviction in that move to continue greater distance in that direction. However, if the volume is on the lower side during a move, the stock is generally bound to lose momentum.
                            <br/>
                            <br/>
                            Generally, during range-bound phases, the volume is low.
                            <br/>
                            <br/>
                            <img src={Range} alt="range" className='w-75' />
                            <br/>
                            <br/>
                            An important point regarding volume is that traded volume in absolute terms has no significance.
                            <br/>
                            <br/>
                            When we talk about higher or lower volume, it is relative to average volume over certain time periods.
                            <br/>
                            <br/>
                            <div className="table w-100 p-0 m-0">
                                <div className="table-heads text-uppercase row text-center bg-primary-subtle m-auto p-3 border border-1 border-black">
                                    <div className='col'>Trend</div>
                                    <div className='col'>Volume</div>
                                    <div className='col'>Interpretation</div>
                                </div>
                                <div className="row-contain">
                                    <div className="vals row m-auto">
                                        <div className='col p-3 border border-1 border-black'>Up</div>
                                        <div className='col p-3 border border-1 border-black'>High</div>
                                        <div className='col px-2 border border-1 border-black'>Uptrend may go a greater distance</div>
                                    </div>
                                    <div className="vals row m-auto">
                                        <div className='col p-3 border border-1 border-black'>Up</div>
                                        <div className='col p-3 border border-1 border-black'>Low</div>
                                        <div className='col px-2 border border-1 border-black'>Lack of conviction/participation in on uptrend. likely to retrace</div>
                                    </div>
                                    <div className="vals row m-auto">
                                        <div className='col p-3 border border-1 border-black'>Down</div>
                                        <div className='col p-3 border border-1 border-black'>High</div>
                                        <div className='col px-2 border border-1 border-black'>Down move may cover a greater distance</div>
                                    </div>
                                    <div className="vals row m-auto">
                                        <div className='col p-3 border border-1 border-black'>Down</div>
                                        <div className='col p-3 border border-1 border-black'>Low</div>
                                        <div className='col px-2 border border-1 border-black'>Less conviction in the down move may reverse</div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            Apart from traded volume, one important concept regarding volume is delivery %. In the market, a person can first buy shares and sell by the end of the day. He or she can do the reverse too. This is called intra-day trading. However, if an investor is having a positive view he may buy the share and carry forward it for a number of days. This is called taking delivery of a share. Hence if there is a price rise of a stock with a high % of delivery volume, then this signifies a positive conviction in the stock. Similarly, if a lot of people are long term negative about a stock, they may sell the stock and give delivery. Markets are driven by buyers and sellers. People who have a positive view of security are called bulls and people who have a negative view are called bears. The price of a security in a market is determined by supply-demand dynamics of any stock. If the supply is high and a lot of people are looking to sell the stock, then there are fewer available buyers, and the price is likely to decline. Hence a fall in price with high delivery % is considered negative for a stock.
                            <br/>
                            <br/>
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
                    <div className="analysis-card p-4 rounded-4 mt-5" id="chartpatterns">
                        <h1 className='text-primary'>Classical Chart Patterns</h1>
                        <hr />
                        <p>
                            As we have discussed in the previous section, that market can be either in the trending phase or in a range-bound phase. No trend generally lasts forever in the market. After prolonged or medium or shorter duration up and downtrend, the market often reverses and a move starts in the opposite direction of the prior move. Often we find that well defined geometrical patterns are formed in the chart which provides a good indication of price reversals. These patterns are called reversal classical chart patterns. When they are formed as a bullish reversal pattern they are said to be part of accumulation. On the other hand, if they are formed at the top of a price move just before a bearish reversal, then they are part of the distribution.
                            <br/>
                            <br/>
                            However, a geometrically shaped consolidation does not necessarily mean price reversal. Often price resumes the erstwhile trend post the consolidation move. These are called continuation classical chart patterns. We will discuss a few of them in the upcoming sections of our module. 
                            <br/>
                            <br/>
                            <b>Head and Shoulder & Inverse</b>
                            <br/>
                            Head & Shoulder Head and Shoulder pattern is a bearish reversal pattern. This pattern appears after an uptrend. This pattern is formed with three consecutive tops with the middle one being higher than the other two. The middle top is called the head and the two side peaks are called the shoulders. On joining the intermediate troughs, we get the neck-line. On an ultimate break below the neckline, usually, a short trade is taken with a stop loss above the top of the nearest shoulder. The target is usually considered as the distance between the neckline and head, projected from the point of break, if the volume in the down leg of the right shoulder is on the higher side and breakout happens with high volume, the conviction is on the higher side for the reversal.
                            <br/>
                            <br/>
                            <img src={Inversehs} alt="inversehs" className='w-75' />
                            <br/>
                            <br/>
                            An Inverse Head and Shoulder is just a mirror Image of the Head and Shoulder pattern. This should appear after a sustained down trend the rule of stop loss and target are similar. This often acts as a very effective bullish reversal pattern.
                            <br/>
                            <br/>
                            <b>Double Tops and Bottoms</b>
                            <br/>
                            These chart potterns are well-known patterns that signal a trend reversal these are considered to be one of the most reliable. patterns and are commonly used. These patterns are formed after a sustained trend and signal to chartists that the trend is about to reverse. These patterns are created when price movement tests support or resistance levels twice and is unable to break through: These patterns are often used to signal intermediate and long-term-trend reversals.
                            <br/>
                            <br/>
                            <img src={Doubletb} alt="doubletb" className='w-75' />
                            <br/>
                            <br/>
                            <b>Triple Tops and Bottoms</b>
                            <br/>
                            These are another set of reversal chart patterns in chart analysis. These are not as prevalent in charts as Head and Shoulders and Double Tops and Bottons, but they act in a similar fashion. These two chart patterns are formed when the price movement tests a level of support or resistance three times and is unable to break through. They signal a reversal of the prior trend. Trade entry is initiated at the break of a neckline with a small stop-loss and the target is measured as the distance between peaks/troughs and the neckline.
                            <br/>
                            <br/>
                            <img src={Tripletb} alt="tripletb" className='w-75' />
                            <br/>
                            <br/>
                            <b>Triangles</b>
                            <br/>
                            Triangles are one of the most well-known chart patterns used in technical analysis. The three most common types of triangles, which vary in construction and implications are Symmetrical Triangle, Ascending Triangle, and Descending Triangle. These chart patterns are considered to last anywhere from a couple of weeks (ideally more than 12 weeks) to several months. These are areas of consolidations after a trending move and are generally continuation patterns, Le the erstwhile trends resume after the breakout. However, in certain cases, they act as reversal patterns. They can appear both in up-trend and down-trend.
                            <img src={Triangle} alt="triangle" className='w-75' />
                            <br/>
                            <br/>
                            <b>Flag and Pennant</b>
                            <br/>
                            These two short-term chart patterns are continuation patterns that are formed when there is a sharp price movement followed by a generally sideways price movement. The patterns are generally thought to last from one to three weeks (Can last from 1 to 12 weeks but ideally they should last between 1 and 4 weeks). They can appear both in up-trend and down-trend.
                            <br/>
                            <br/>
                            <img src={Flagpenant} alt="flagpenant" className='w-75' />
                            <br/>
                            <br/>
                            <b>Wedge</b>
                            <br/>
                            The Wedge chart pattern can be either a continuation or a reversal pattern, it is similar to a Symmetrical Triangle except that the Wedge Pattern slants in an upward or downword direction, while the symmetrical triangle generally shows a sideways movement. The other difference is that Wedges tend to form over longer periods usually between three and six months. The fact that Wedges are classified as both continuation and reversal patterns, can make reading signals confusing. However, at the most basic level, a talling wedge in and is bullish and a rising wedge in a downtrend is considered bearish.
                            <img src={Wedge} alt="wedge" className='w-75' />
                            <br/>
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
                    <div className="analysis-card p-4 rounded-4 mt-5" id="reversalpatterns">
                        <h1 className='text-primary'>Candlestick Reversal Patterns</h1>
                        <hr />
                        <p>
                            In this section, we will discuss a few popular candlestick patterns. Candlestick patterns provide entry and stop-loss criterio, but there is no target setup as available in classical chart patterns.
                            <br/>
                            <br/>
                            <b>Hammer</b>
                            <br/>
                            Hammer is a single candlestick builish reversal pattern. This occurs after a prolonged down trend, ideally, there should be a gap down opening and bears should be able to push the price lower as a continuation of a down-move. At this point, bulls should overpower bears and push prices higher and make close to the opening price. The candle formed in this process should have a small body, a big lower shadow, and a negligibly small upper shadow, Ideally, the lower shadow should be at least twice the length of the body. The color of the body can be either green or red, but if the body color is green, then the hammer is considered a little more bullish, as the bulls were strong enough to close the price higher than the open price.The next day or in the next two to three days, ideally there should be a gop up opening or price should move above the high of the hammer candle. This is called confirmation or validation of the pattern. A hammer like a candie, without validation, has no real significance. If price moves above the high of the hammer a buy trade can be taken with a below the low of the candle.
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="hammer">

                                </div>
                            </div>
                            <br/>
                            <br/>
                            <b>Shooting Star</b>
                            <br/>
                            A shooting star is just like a mirror image of o hammer candle, First, there should be a sustained up trend and then there has to be a gap up opening. The bulls should push the price higher in the initial part of the day. Then, later in the day bears should take in the control of the stock and push prices down. Eventually, the closing price should be very close to the opening price, resulting in a candle with a small green or red body, a big upper shadow, and a small or negligible lower shadow. The upper shadow of the candle should be at least twice the length of the body. Now confirmation of the shooting star pattern comes if the price moves below the low of the candle within the next 2-3 candles On confirmation, a short trade should be token with stop loss above the high of the candle. A shooting star pattern with a red body is considered slightly more bearish than one with a green body. It is often observed that the shooting stor candlestick pattern acts as a bearish reversal pattern and triggers a down move after an uptrend.
                            <br/>
                            <br/>
                            <img src={Shootingstar} alt="shootingstar" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Inverted-Hammer</b>
                            <br/>
                            An inverted hammer is a single candlestick bullish reversal pattern. The pattern appears after a sustained down-trend. At the beginning of the day, there should be a gap - down opening. However, bulls should push the price higher during the course of the day. Eventually, the bears should push the price lower during the course of the day and close near the open price. The resulting candle should have a small body, red or green, the upper wick should be at least twice the body of the candle and the lower shadow should be quite small or negligible in size. If the body is green it is relatively mare bullish than if it is red. This looks like an inverted hammer as the name suggests. The philosophy is that bears were not able to push the price below the opening price during the course of the day.This pattern, however, is considered to be a little less bullish than the hammer itself,because in hammer bulls are able to force a higher close by the end of the day. The confirmation of the pattern comes once the price moves obove the high of the candle. On confirmation, a buy trade can be initiated with a stop loss below the low of the candle. The Inverted hammer occurs a little less frequently in the market as compared to the hammer pattern.
                            <br/>
                            <br/>
                            <img src={InvtHammer} alt="inverthammer" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Hanging Man</b>
                            <br/>
                            Hanging Man is a single candlestick bearish reversal pattern. This appears after a sustained up-move. The candle looks like a hammer; the only difference is that it appears at the end of an up-trend. The candle should have a small body at the top (red/green) and a lower shadow at least twice the length of the body. There should be very small or no upper shadow. A red coloured body at hanging man pattern is more bearish than a hanging man pattern with a green body. The confirmation of the pattern happens when the price moves below the low of the candle. On confirmation, a trader may take short trade with a stop-loss above the high of the candle. The hanging man pattern is the bearish counterpart of Bullish inverted hammer. However, this appears much less frequently than shooting star which is another bearish reversal pattern.
                            <br/>
                            <br/>
                            <img src={Hangman} alt="hangingman" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Bullish Engulfing Pattern</b>
                            <br/>
                            Bullish candlestick pattern is a two-candlestick bullish reversal pattern. First, there should be a downtrend. Then we should have a red candle followed by a green candle. The body of the green candle should engulf the body of the first red candle. The idea is in the second candle that constitutes the pattern, the day started below the previous day's close on a bearish note. However, as the day progresses, the bulls take-over the charge and eventually succeed to close above the previous day's high. In such a scenario, If the highest point of these two candlesticks is breached on the upside within the next 2-3 candles, the bearish engulfing pattern is said to be confirmed. A buy trade can be initiated upon confirmation with a stop-loss below the low of the two candlestick patterns.
                            <br/>
                            <br/>
                            <img src={Bulish} alt="bullish" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Bearish Engulfing Pattern</b>
                            <br/>
                            Bearish Engulfing pattern is just a mirror image of a bullish engulfing pattern with bearish implication. First, we should be having an up-trend. Then we should have a green candle as a continuation. The next day should see a gap up above the close of the previous day. The 2nd-day candle should eventually close red with its body totally engulfing the body of the first candle. The confirmation comes when within the next 2-3 candles the price moves below the low of the two candles forming the Bearish Engulfing pattern. On confirmation, a trader may take a short trade with stop loss above the top of the two candlestick patterns. Larger the second candle, the more bearish the pattern.
                            <br/>
                            <br/>
                            <img src={Berish} alt="berish" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Piercing Pattern</b>
                            <br/>
                            The piercing pattern is just similar to the bullish engulfing pattern; the only thing is that the 2nd candle in the two candlestick patterns does not close engulfing the body of the first candle. Instead, it closes crossing the halfway mark of the body of the first candle. Confirmation comes when price crosses the high of the two candlestick patterns within the next 2-3 candles. On confirmation one may take a buy trade with stop loss below the low of the candle.
                            <br/>
                            <br/>
                            <img src={Piercepattern} alt="pircingpattern" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Dark Cloud Cover</b>
                            <br/>
                            The Dark cloud cover is a two candlestick bearish reversal pattern and much similar to the bearish engulfing pattern. In this pattern, the second candle, unlike the bearish engulfing pattern falls short of engulfing the first candle, instead, it crosses 50% the body of the first candle. The confirmation comes when a candle breaches the bottom of the pattern. On confirmation, a short trade can be taken with stop loss above the high of the candle.
                            <br/>
                            <br/>
                            <img src={Cloudcover} alt="cloudcover" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Doji</b>
                            <br/>
                            The Doji is a single candlestick pattern. The Doji assumes significance when it appears after a trending move, be it up or down. The Doji symbolizes indecision and after a Doji, the incumbent trend can reverse, go sideways or continue the uptrend. However, the appearance of a Doji is a signal of caution that the probability is high that the erstwhile trend may be coming to an end. Doji is a candle that has open and close almost at a similar level. There can be upper shadows and lower shadows of various proportions.
                            <br/>
                            <br/>
                            <img src={Doji} alt="doji" className='w-75'/>
                            <br/>
                            <br/>
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
                    <div className="analysis-card p-4 rounded-4" id="techindicators">
                        <h1 className='text-primary'>Technical Indicators</h1>
                        <hr />
                        <p>
                            <br/>
                            Since we have learned the basics of technical analysis from our previous units, we now going to learn an essential component of technical analysis in this unit: Indicators.
                            <br/>
                            <br/>
                            Indicators are tools to aid decision making in the market. There various types of indicators that measure or indicate the trend, the momenturn, the volatility, and various other aspects in the market. There are thousands of Indicators that are derived out of the price and volume data over time. Here we introduce you with four very useful indicators.
                            <br/>
                            <br/>
                            <b>Simple Moving Average</b>
                            <br/>
                            Simple Moving Average or SMA is a moving average which is calculated by adding the closing price of security prices for the last n periods and dividing it by the total number of time periods
                            <br/>
                            <br/>
                            For example, suppose we want to calculate the 9 periods SMA of a security price.
                            <br/>
                            <br/>
                            First, we will add the last 9 Days Closing Price of the security, and then it will be divided by the 9 periods
                            <br/>
                            <br/>
                            <b>The calculation for 9 periods SMA:</b>
                            <br/>
                            <br/>
                            (P9+PB+P7+P6 +PI)/9 Where P=Price
                            <br/>
                            <br/>
                            P9 Closing Price 9 days ago
                            <br/>
                            <br/>
                            SMA is a Technical indicator that is represented by a line and it is directly plotted on the security price. As per the choice of the trader, the periods can be changed in the SMA indicator.
                            <br/>
                            <br/>
                            For shorter-term SMA, we can use 5,813, etc. For Medium term 20, 34, 50, and for longer- term 100,200 can be used.
                            <br/>
                            <br/>
                            If a medium-term moving average is having a positive slope, the trend is considered to be positive in the medium-term and vice versa.
                            <br/>
                            <br/>
                            Price breaching a particular moving average from down to up is considered a bullish sign. Similarly, price breaching a particular moving average from upside and closing below is considered bearish
                            <br/>
                            <br/>
                            If we find a shorter term moving average crossing a medium-term moving average from below, often this is called bullish crossover. On the other hand, if a shorter-term moving average crosses a medium-term moving average from upside to below that is called a bearish crossover and often considered a signal of bearishness.
                            <br/>
                            <br/>
                            <img src={Sma} alt="sma" className='w-75'/>
                            <br/>
                            <br/>
                            <b>RSI</b>
                            <br/>
                            Relative Strength Index (RSI) is a momentum oscillator, developed by J. Welles Wilder, which measures the speed and velocity of the price movement of trading instruments (stocks, commodity futures, bonds, forex, etc.)Simple Moving over a specified period of time.
                            <br/>
                            The objective of the RSI indicator is to measure the change in price momentum. It is a leading Indicator and is widely used by Technical Analysts over the globe. RSI can be used to spot a general trend. It is considered overbought when it goes above 70 and oversold when it goes below 30. The 30-70 region of RSI is considered to be a normal zone.
                            <br/>
                            <br/>
                            <b>Calculation:</b>
                            <br/>
                            The formula for calculating the Relative
                            <br/>
                            <br/>
                            Strength index is as follows
                            <br/>
                            <br/>
                            RSI = 100-100/(1+RS)
                            <br/>
                            <br/>
                            RS = Average Gain over a specified period/Average loss over the same period
                            <br/>
                            <br/>
                            The default setting for the Relative Strength Index is 14, but you may change this value to decrease or increase sensitivity based on your requirement
                            <br/>
                            <br/>
                            <b>Usage</b>
                            <br/>
                            There are many uses of RSt. However, the most popular ones are, if we find that RSI breaching the 70 levels and at the same time we spot a bearish reversal pattern, then there is an opportunity to take short trade with stop loss. Similarly, if RSI breaches 30 from below to above and we observe a bullish reversal pattern, there is an opportunity to take long trade with stop loss.
                            <br/>
                            <br/>
                            <img src={Rsi} alt="rsi" className='w-75'/>
                            <br/>
                            <br/>
                            <b>ADX</b>
                            <br/>
                            In 1987 J. Welles Wilder developed the Average Directional Index (ADX) as an Indicator of trend strength.
                            <br/>
                            <br/>
                            ADX quantifies the velocity of the price regardless of its north/south/eastward movement.
                            <br/>
                            <br/>
                            Hence, two other lines ie. Positive Directional Indicator (+DI) and Negative Directional Indicator (-DI) are used on the charting system which acts as complements to ADX,
                            <br/>
                            <br/>
                            When ADX is above 20 or 25, generally Market is considered to be in a trending phase. The trend can be up or down. On the other hand +Df crosses the-DI line from below, the market. generally moves up and when the -DI line crosses the DI line from below the market generally moves in the downward direction.
                            <br/>
                            <br/>
                            <img src={Adx} alt="adx" className='w-75'/>
                            <br/>
                            <br/>
                            <b>Conclusion</b>
                            <br/>
                            As we have come to the end of this module Let's sum up the topics we have covered. We have covered the basics of technical analysis and focused on the different types of charts, chart patterns and most popular candlestick charts. But learning does not end here; there are a lot more things to learn in technical analysis. We have prepared many such modules on different topics of technical analysis and more on topics related to financial markets, Be sure to check them out on ELM School.
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

export default TechnicalAnalysis