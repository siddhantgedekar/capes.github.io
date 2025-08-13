// import { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const Accord = ({amount, ratio, profit}) => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className='mb-3 bg-primary-subtle'>
                    <Accordion.Header className='d-flex'>
                        <div>
                            <img src="someimage" alt=" " />
                        </div>
                        <div>
                            <small>Canara Rob Bluechip Equity Fund</small>
                            <div className='d-flex justify-content-between mt-2'>
                                <p className='px-2'>AUM <br /><br /> {amount}</p>
                                <p className='px-2'>Expense Ratio <br /><br /> {ratio}</p>
                                <p className='px-2'>5Y CAGR <br /><br /> <small className='text-success'>{profit}</small></p>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Accord