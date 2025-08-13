import { Form, Button  } from 'react-bootstrap';
import { useIPOStore } from '../store/store.js';
import { useState } from 'react';

const Dashboard = () => {
    const fields = "company,state,ticker,exchange,profit,debt,assets,ipo date,ipo fees,ipo price,ipo amount,industry".toUpperCase().trim().split(",");

    const newField = "company,state,ticker,exchange,profit,debt,assets,ipo_date,ipo_fees,ipo_price,ipo_amount,industry".trim().split(",");
    const jsonObj = {};
    newField.forEach((value, index) => {
        jsonObj[`${value}`] = "";
    });

    const [IPO, setIPO] = useState(jsonObj);
    const { createIPO } = useIPOStore();
    console.log(IPO);
    
    const postIpo = async () => {
        const {success, message} = await createIPO(IPO);
        // success then notify
        if(success) {
            toast.success(message);
        }
        else {
            toast.error(message);
        }
    }

    const format = (field) => {
        return field.replace("_", " ").toUpperCase();
    }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <Form className='m-auto shadow-lg p-4 rounded w-75'>
            <legend>Add IPO</legend>
            <div className="row d-flex justify-content-center align-items-center">
                {newField.map((values) => {
                    return(
                        <Form.Group controlId={values} className="col-lg-4 col-md-6">
                            <Form.Label>{format(values)}</Form.Label>
                            <Form.Control type="text" onChange={(e) => {setIPO({...IPO, [values]: e.target.value})}}/>
                        </Form.Group>
                    );
                })}
            </div>
            <Button variant="primary" type="button" className='my-2' onClick={postIpo}>Submit</Button>
        </Form>
    </div>
  )
};

export default Dashboard;