import { Card, Button, Modal } from 'react-bootstrap';
import Navbars from '../components/Navbars.jsx';
import { useEffect, useState } from 'react';
import { taskStore } from '../store/store';
import { toast } from 'react-toastify';
import { MdAdd } from "react-icons/md";


const HomePage = () => {
    const { createTask, deleteTask, fetchTask, updateTask, task } = taskStore();
    const [modal, setModal] = useState(false);
    const [tempTask, setTempTask] = useState({
        title: "",
        task: "",
        complete: "",
    });
    
    useEffect(() => {
        handleData();
    }, []);

    const handleData = async () => {
        await fetchTask();
    }
    const changeTask = async (tid, value) => {
        // update value
        console.log(tid, value);
    }
    const removeTask = async (tid) => {
        // delete task
        const { success, message } = await deleteTask(tid);
        
        if(success) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }
    const addTask = async () => {
        const { success, message } = await createTask(tempTask);

        if(success) {
            toast.success("A new task created");
            hideModal();
            setTempTask({
                _id: "",
                title: "",
                task: "",
                complete: "",
            });
        } else {
            toast.error(message);
            hideModal();
        }
    }
    const onCheckClick = async (tid, newTask, e) => {
        e.target.style
        await updateTask(tid, newTask);
    }

    const showModal = () => {
        setModal(true);
    }
    const hideModal = () => {
        setModal(false);
    }


    return (
        <div className="container">
            <Navbars />
            <div className="content m-0 row d-flex justify-content-between align-items-center flex-column my-2">
                {task.map((items) => {
                    return (
                        !task ?
                        <div className="header fw-bold text-center my-2">Create a task</div>
                        :
                        <Card className="p-0 border-0 shadow-sm my-2" key={items._id}>

                            <Card.Header className={`fw-bold text-wrap text-decoration-${items.complete === "true" ? "line-through" : "none"}`}>{items.title}</Card.Header>
                            
                            <Card.Body className="bg-primary-subtle row d-flex justify-content-between align-items-center m-0">

                                <Card.Text className={`"text-wrap col-lg-10 col-md-12 fs-italic m-auto text-decoration-${items.complete === "true" ? "line-through" : "none" }`}>
                                    {items.task}
                                </Card.Text>

                                <Card.Text className="col-lg-2 col-md-12">
                                    <Button className="btn btn-danger border-0 mx-2" onClick={() => removeTask(items._id)}>Delete</Button>
                                    {/* <input type="checkbox" onClick={(e) => onCheckClick(items._id, tempTask)} checked={items.complete === "true" ? true : false} onChange={(e) => {setTempTask({...tempTask, _id: items._id, title: items.title, task: items.task, complete: e.target.checked})}} /> */}
                                    <input type="checkbox" onChange={(e) => onCheckClick(items._id, {...items, _id: items._id, title: items.title, task: items.task, complete: e.target.checked}, e)} checked={items.complete === "true" ? true : false} />
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    )
                })}
            </div>

            <div className='text-end'>
                <Button type="button" className='btn btn-primary text-dark' onClick={showModal}><MdAdd size={25}/></Button>
                <Modal centered show={modal} onHide={hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <input type="text" className='w-100 border-0 bg-transparent p-2' placeholder='task name' onChange={(e) => setTempTask({...tempTask, title: e.target.value})}/>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" className='w-100 border-0 bg-transparent p-2' placeholder='to do' onChange={(e) => setTempTask({...tempTask, task: e.target.value})}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={hideModal}>Close</Button>
                        <Button variant="success" onClick={addTask}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default HomePage;