import { useIPOStore } from '../store/store.js';
import Navbars from '../components/Navbars';

const Analytics = () => {
    const time = new Date();
    
    const { getIPO, ipo } = useIPOStore();

    const showIpos = async () => {
        await getIPO();
        console.log(ipo);
    }

  return (
    <div onLoad={showIpos}>
        <Navbars values={"PRODUCTS"}/>

        <div className="container my-5">
            <a href="/" className='text-decoration-none'>Home</a>
            <a className='mx-2 text-decoration-none text-secondary'>&gt;</a>
            <a className='text-secondary text-decoration-none'>Analytics</a>
        </div>

        <div className="nifty-50 container">
            {/* <button onClick={showIpos} className='btn btn-primary my-2'>load data</button> */}
            <div className='nifty row'>
                <h4 className='text-uppercase nifty-head col-4 m-0'>Nifty 50</h4>
                <div className='nifty-text d-flex justify-content-start align-items-center p-1 m-0'>
                    <div className='text-danger'>Today's market has closed</div>
                    <div>&nbsp;as on &nbsp;</div>
                    {time.toLocaleDateString() + " " + time.toLocaleTimeString()}
                    <div className="d-flex justify-content-between align-items-center mx-5">
                        <div className="text-success px-2">
                            Advances - 30
                        </div>
                        <div className="text-danger px-2">
                            Declines - 20
                        </div>
                        <div className="text-secondary px-2">
                            Unchanged - 0
                        </div>
                    </div>
                </div>
            </div>
            <div className="data row my-4">
                <div className='ipos row d-flex justify-content-center align-items-center m-auto p-2'>
                    <div className="col fw-bold" htmlFor="company">Company</div>
                    <div className="col fw-bold" htmlFor="state">State</div>
                    <div className="col fw-bold" htmlFor="ticker">Ticker</div>
                    <div className="col fw-bold" htmlFor="exchange">Exchange</div>
                    <div className="col fw-bold" htmlFor="profit">Profit</div>
                    <div className="col fw-bold" htmlFor="debt">Debt</div>
                    <div className="col fw-bold" htmlFor="assets">Assets</div>
                    <div className="col fw-bold" htmlFor="date">Date</div>
                    <div className="col fw-bold" htmlFor="fees">Fees</div>
                    <div className="col fw-bold" htmlFor="price">Price</div>
                    <div className="col fw-bold" htmlFor="amount">Amount</div>
                    <div className="col fw-bold" htmlFor="industry">Industry</div>
                </div>
                {ipo.map((ipos) => {
                    return (
                        <div className="row my-2 d-flex justify-content-between align-items-center">
                            <small className='col' name="company">{ipos.company}</small>
                            <small className='col' name="state">{ipos.state}</small>
                            <small className='col' name="ticker">{ipos.ticker}</small>
                            <small className='col' name="exchange">{ipos.exchange}</small>
                            <small className='col' name="profit">{ipos.profit}</small>
                            <small className='col' name="debt">{ipos.debt}</small>
                            <small className='col' name="assets">{ipos.assets}</small>
                            <small className='col' name="date">{ipos.ipo_date}</small>
                            <small className='col' name="fees">{ipos.ipo_fees}</small>
                            <small className='col' name="price">{ipos.ipo_price}</small>
                            <small className='col' name="amount">{ipos.ipo_amount}</small>
                            <small className='col' name="industry">{ipos.industry}</small>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Analytics