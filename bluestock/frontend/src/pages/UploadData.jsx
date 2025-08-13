import { useIPOStore } from "../store/store";

const UploadData = () => {
  // const ipoFile = '../../../IPO_data_2023_S1.csv';

  // const [newIpo, setNewIpo] = useState({
  //   company: "",
  //   state: "",
  //   ticker: "",
  //   exchange: "",
  //   profit: "",
  //   debt: "",
  //   assets: "",
  //   ipo_date: "",
  //   ipo_fees: "",
  //   ipo_price: "",
  //   ipo_amount: "",
  //   industry: ""
  // });
  return (
    <div>
      {/* <form method='POST'>
            <label htmlFor='file'>Upload file</label>
            <input type="file" className='bg-transparent p-3 border-0' id='file'/>
        </form> */}
      <button type='submit' className='btn btn-primary'>Upload IPOS</button>
    </div>
  )
}

export default UploadData