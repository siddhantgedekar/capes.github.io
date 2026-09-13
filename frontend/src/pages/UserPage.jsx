import { userStore } from "../store/store.js";
import { Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import { useEffect } from "react";

const UserPage = () => {
    const { fetchUser, removeUser, user } = userStore();

    const getUser = async () => {
        await fetchUser();
    }
    const deleteuser = async (tid) => {
        console.log(tid);
        // delete user
        const {success, message} = await removeUser(tid);
        if(success) {
            toast.success(message);
        } else{
            toast.error(message);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

  return (
    <div className="container">
        <div className="row m-0 p-3 rounded d-flex justify-content-center align-items-center vh-100">
            {
                <ul className="bg-white rounded p-3">
                    {user.map((items) => {
                        return (
                            <li key={items._id}>{items.name} <Button onClick={deleteuser(items._id)}>Delete</Button></li>
                        )
                    })}
                </ul>
            }
        </div>
    </div>
  )
}

export default UserPage;