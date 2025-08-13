import { Dropdown, Accordion } from 'react-bootstrap'
import Navbars from '../components/Navbars'
import Accord from '../components/Accord'
import { useState } from 'react'

const MutualFunds = () => {
    const fundStat = {
        amount: "₹ 1,00,000 Cr",
        ratio: "0.5%",
        profit: "18.48%",
    }

    const [dropdown, setDropdown] = useState("select");
    const [dropdown1, setDropdown1] = useState("select");
    const [dropdown2, setDropdown2] = useState("select");
    const [dropdown3, setDropdown3] = useState("select");
    const [dropdown4, setDropdown4] = useState("select");
    const handleDropdown = (eventKey) => {
        setDropdown(eventKey);
    }
    const handleDropdown1 = (eventKey) => {
        setDropdown1(eventKey);
    }
    const handleDropdown2 = (eventKey) => {
        setDropdown2(eventKey);
    }
    const handleDropdown3 = (eventKey) => {
        setDropdown3(eventKey);
    }
    const handleDropdown4 = (eventKey) => {
        setDropdown4(eventKey);
    }

  return (
    <div>
        <Navbars values={"IPO"} />

        <div className="container my-5">
            <a href="/" className='text-decoration-none'>Home</a>
            <a className='mx-2 text-decoration-none text-secondary'>&gt;</a>
            <a className='text-secondary text-decoration-none'>Mutual Funds</a>
        </div>

        <div className="large-caps bg-secondary-subtle py-4 my-5 row d-flex justify-content-center">
            <div className="row d-flex justify-content-between px-5">
                <div className="col-lg-7 col-md-7 col-12">
                    <h1 className='fw-bold'>Large Cap Mutual Funds</h1>
                    <p className='fw-bold'>Large Cap funds invest in stocks of the top 100 companies in terms of full market 
                    capitalization. They invest at least 80% of their assets in large cap companies. These
                    funds are relatively less riskier than other market cap funds.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                    <div className="blue-square"></div>
                </div>
            </div>
        </div>

        <div className="mutual-fund-overview container">
            <h1 className='text-center my-5'>Overview of Large Cap Mutual Funds</h1>
            <div className="row">
                <div className="overview-left col-lg-4 col-md-4 rounded-3 bg-secondary-subtle p-3">
                    Fund Categories
                    <div className="categories row py-3">
                        <div className="category col-lg-7 col-md-7">
                            <div className="contain d-flex justify-content-between flex-column">
                                <p>Equity</p>
                                <p>Dept</p>
                                <p>Hybrid</p>
                                <p>Commodity</p>
                                <p>Other</p>
                            </div>
                        </div>
                        <div className="category-dropdown col-lg-5 col-md-5">
                            <Dropdown onSelect={handleDropdown} className="my-1 py-0">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="overflow-hidden">{dropdown}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={"Action"}>Action</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action2"}>Action2</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action3"}>Action3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <Dropdown onSelect={handleDropdown1} className="my-1 py-0">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="overflow-hidden">{dropdown1}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={"Action4"}>Action4</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action2"}>Action5</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action3"}>Action6</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={handleDropdown2} className="my-1 py-0">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="overflow-hidden">{dropdown2}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={"Action4"}>Action4</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action2"}>Action5</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action3"}>Action6</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={handleDropdown3} className="my-1 py-0">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="overflow-hidden">{dropdown3}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={"Action4"}>Action4</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action2"}>Action5</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action3"}>Action6</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={handleDropdown4} className="my-1 py-0">
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="overflow-hidden">{dropdown4}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={"Action4"}>Action4</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action2"}>Action5</Dropdown.Item>
                                    <Dropdown.Item eventKey={"Action3"}>Action6</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                    
                <div className="overview-right col-lg-8 col-md-8">
                    <Accord amount={fundStat.amount} ratio={fundStat.ratio} profit={fundStat.profit}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MutualFunds