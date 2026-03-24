import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTask, getAllTask } from '../features/task/taskSlice';

const AddTask = () => {
    const [task , setTask] = useState({});
    const {loading , error , taskData} = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);

    const handleChange = (e) => {
        const {name , value} = e.target;
        setTask({...task , [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        dispatch(createTask(task));
        setTask({});
    }

    useEffect(() => {
        dispatch(getAllTask());
    },[]);

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-4'>
                <form action="" method='post' onSubmit={handleSubmit}>
                    <h2>Assign Task</h2>
                    <div className='mb-3'>
                        <label htmlFor="employee" className='form-label'>Employee Name</label>
                        <select name="user" id="user" className='form-select' onChange={handleChange}>
                                {
                                    users.map((user) => {
                                        return (
                                            <option value={user.fname + " " + user.lname}>{user.fname + " " + user.lname}</option>
                                        )
                                    })
                                }
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="task" className='form-label'>Task Name</label>
                        <input type="text" name='name' id='task' className='form-control' value={task.name || ""} onChange={handleChange} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Add Task</button>
                </form>
            </div>
        </div>

        <div className='row justify-content-center mt-5'>
            <div className='col-md-6'>
                <table className='table table-striped table-hover table-bordered caption-top'>
                    <caption>
                        <h2>Task Data</h2>
                    </caption>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Employee Name</th>
                            <th>Task Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading
                            ?
                                <tr>
                                    <td colSpan={3} className='text-center'>Loading</td>
                                </tr>
                            :
                            taskData.length > 0
                            ? 
                                taskData.map((value,index) => {
                                    return (
                                        <tr key={value.id}>
                                            <td>{index + 1}</td>
                                            <td>{value.user}</td>
                                            <td>{value.name}</td>
                                            <td>
                                                <button className='btn btn-danger me-2'>Delete</button>
                                                <button className='btn btn-warning'>Edit</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                            <tr>
                                <td colSpan={3} className='text-center'>Data Not Found.</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddTask
