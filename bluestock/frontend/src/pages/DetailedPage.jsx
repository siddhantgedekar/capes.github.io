import Navbars from '../components/Navbars.jsx';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Inox from '../inox.png';

const DetailedPage = () => {
    const [currDate, setCurrDate] = useState(new Date());
    const [minutesOnPage, setMinutesOnPage] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setMinutesOnPage((prev) => prev + 1);
        }, 60000); // 60,000 ms = 1 minute

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div onLoad={() => handleTimestamp(new Date())} className="detailed-page mb-5 pb-5">
        <Navbars values={"PRODUCTS"}/>
        
        <div className="container my-5">
            <a href="/" className='text-decoration-none'>Home</a>
            <a className=' mx-2 text-decoration-none text-secondary'>&gt;</a>
            <a href="/blogs" className='text-decoration-none'>Blogs</a>
            <a className=' mx-2 text-decoration-none text-secondary'>&gt;</a>
            <a href="/ipohomepage" className='text-decoration-none'>IPO</a>
            <a className=' mx-2 text-decoration-none text-secondary'>&gt;</a>
            <a className='text-secondary text-decoration-none'>Inox India IPO</a>
        </div>

        <div className="container">
            <div className="row">
                <div className='col-lg-8'>
                    <h2>Key Things to Know About Inox India IPO <br/>Inox India IPO - Everything You Must Know</h2>
                    <div className="date my-2">{currDate.toDateString()} &nbsp;&nbsp;&nbsp; {minutesOnPage} min read</div>
                    <div className="intro">
                        <img src={Inox} alt="inox_ipo" className='col-12'/>
                    </div>
                    <hr/>
                    <div className="text-section">
                        <p>
                            One of the leading manufacturers of cryogenic storage tanks, Inox India, is about to launch its IPO on 14 December 2023. The much-awaited IPO is expected to boost the overall stock market scenario. Let's have a look at Inox IPO details here.
                        </p>
                        <h4 className='my-4'>About Inox India Limited (INOXCVA)</h4>
                        <p>The Gujarat-based company, Inox India is a supplier of cryogenic equipment that excels in offering end-to-end solutions for equipment and systems operating in cryogenic conditions. From design to engineering to manufacturing, INOXCVA is a leader that offers a plethora of products and services.</p>
                        <p>With its 3 primary divisions, i.e. Industrial Gas, LNG, and Cryo Scientific, the company caters to various industries dealing in industrial gases, healthcare, green hydrogen, chemicals, energy, aviation, and more.</p>
                    </div>
                    <div className="ipo-table mt-5">
                        <p>Some of the important things you should know about Inox India IPO are-</p>
                        <Table striped bordered responsive hover>
                            <tbody>
                                <tr>
                                    <td>IPO Date</td>
                                    <td>14 December, 2023 to 18 December, 2023</td>
                                </tr>
                                <tr>
                                    <td>Price Brand</td>
                                    <td>Rs 627 to Rs 660 per share</td>
                                </tr>
                                <tr>
                                    <td>Face Value</td>
                                    <td>Rs 2 per share</td>
                                </tr>
                                <tr>
                                    <td>Lot Size</td>
                                    <td>22 Shares</td>
                                </tr>
                                <tr>
                                    <td>Total Issue Size</td>
                                    <td>22,110,955 shares (aggregating up to Rs 1,459.32 Cr)</td>
                                </tr>
                                <tr>
                                    <td>Offer for Sale</td>
                                    <td>22,110,955 shares of Rs 2 (aggregating up to Rs 1,459.32 Cr)</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="info my-5">
                        <ul className='fw-bold'>
                            <li>Inox India IPO Date</li>
                        </ul>
                        <p>
                            The <u>Inox India IPO</u> will open for subscription on 14th November 2023 and will close on 18th November 2023.
                        </p>
                        <ul className='fw-bold'>
                            <li>Listing Date</li>
                        </ul>
                        <p>Inox India shares trading will begin on 21 December 2023 as per the schedule.</p>
                        <ul className='fw-bold'>
                            <li>Offer Details</li>
                        </ul>
                        <p>Offer Details The company is aiming to raise approximately Rs 1,459 crores through the IPO. As per the company-</p>
                        <ul>
                            <li>The issue is entirely an offer for sale (OFS) of 2.21 crore shares having a face value of Rs 2 each. Note there is no fresh issue segment in the IPO.</li>
                        </ul>
                        <ul>
                            <li>Around 50% of the offer is reserved for Qualified Institutional Buyers (QIBs), 35% for Retail Investors, and the remaining 15% is for Non-institutional Investors.</li>
                        </ul>
                        <ul>
                            <li className="fw-bold">Inox India Share Price Band</li>
                        </ul>
                        <p>The price band for Inox India's IPO has been set at Rs 627 to Rs 660 per share.</p>
                        <ul>
                            <li className="fw-bold">Lot Size</li>
                        </ul>
                        <p>Inox India IPO lot size is 22 shares with a Rs 14,520 application amount. Retail investors can apply up to 13 lots with 286 shares or Rs 188,760 amount.</p>
                        <ul>
                            <li className="fw-bold">Company Financials</li>
                        </ul>
                        <p>During the financial year ending with 31 March 2023 and 31 March 2022, the revenue of Inox India Limited increased by approx 22.46% and profit after tax (PAT) rose by 17.02%</p>
                        <p>Here's a brief glimpse of the break-up of the Financials of Inox India (in Rs crores)-</p>
                    </div>
                    <div className='ipo-table mt-3'>
                        <Table striped bordered responsive hover>
                            <thead>
                                <tr>
                                    <th>Year Ended on</th>
                                    <th>30 Sep 2023</th>
                                    <th>31 March 2023</th>
                                    <th>31 March 2022</th>
                                    <th>31 March 2021</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Assets</td>
                                    <td>1,155.81</td>
                                    <td>1,148.36</td>
                                    <td>896.75</td>
                                    <td>687.20</td>
                                </tr>
                                <tr>
                                    <td>Revenue</td>
                                    <td>580.00</td>
                                    <td>984.20</td>
                                    <td>803.71</td>
                                    <td>608.99</td>
                                </tr>
                                <tr>
                                    <td>Profit After Tax</td>
                                    <td>103.34</td>
                                    <td>152.71</td>
                                    <td>130.50</td>
                                    <td>96.11</td>
                                </tr>
                                <tr>
                                    <td>Net Worth</td>
                                    <td>554.24</td>
                                    <td>549.48</td>
                                    <td>502.28</td>
                                    <td>371.51</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='row d-flex justify-content-end align-items-center'>
                        <div className='bg-secondary-subtle details-img m-2'></div>
                        <button className='btn btn-primary p-3 col-10'></button>
                    </div>
                    <div className="posts">
                        <div className="post1 bg-secondary-subtle my-5 px-2">
                            <small>Recent Post</small>
                        </div>
                        <div className="post2 bg-secondary-subtle my-5 px-2">
                            <small>Recent Post</small>
                        </div>
                    </div>
                    <div className="gainers row">
                        <div className="table-container">
                            <div className="table row">
                                <div className="col fw-bold">Top Gainers</div>
                                <div className="col text-end">Resize</div>
                            </div>
                            <div className="table1 row">
                                <div className="col">Info Edge (India)</div>
                                <div className="col text-end">₹ 5,246.15 <br/> <p className='text-success'>160.65 (3.16%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Adani Ports</div>
                                <div className="col text-end">₹ 1,154.25 <br/><p className='text-success'>31.05 (2.76%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Zomato</div>
                                <div className="col text-end">₹ 133.30 <br/><p className='text-success'>3.55 (2.74%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Indus Towers</div>
                                <div className="col text-end">₹ 222.15 <br/><p className='text-success'>5.70 (2.63%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Nykaa</div>
                                <div className="col text-end">₹ 173.40 <br/><p className='text-success'>3.35 (1.97%)</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="losers row my-5">
                        <div className="table-container">
                            <div className="table row">
                                <div className="col fw-bold">Top Losers</div>
                                <div className="col text-end">Resize</div>
                            </div>
                            <div className="table1 row">
                                <div className="col">Sharee cement</div>
                                <div className="col text-end">₹ 27,023.30 <br/><p className='text-danger'>-1,334.60 (4.71%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Cholamandalam Invest</div>
                                <div className="col text-end">₹ 1,257.85 <br/><p className='text-danger'>-39.40 (3.04%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Bajaj Holdings</div>
                                <div className="col text-end">₹ 8,066.10 <br/><p className='text-danger'>-143.85 (1.75%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Pidilite Industries</div>
                                <div className="col text-end">₹ 2,722.60 <br/><p className='text-danger'>-46.45 (1.68%)</p></div>
                            </div>
                            <div className="row table1">
                                <div className="col">Nestle India</div>
                                <div className="col text-end">₹ 2,666.40 <br/><p className='text-danger'>-45.24 (1.67%)</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailedPage