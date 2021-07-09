import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function AddItem() {

    const [taskname, setTaskName] = useState('')
    const taskObj = useSelector(store => store)

    const dispatch = useDispatch()
    function addTask() {
        dispatch({ type: 'ADD_TASK', payload: taskname })
        //  console.log(taskObj.taskItems)
    }
    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-md-6 p-3" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                    <h1>Add taskItem Component</h1>
                    <input type="text" value={taskname} className="form-control w-75" style={{ display: 'inline' }} onChange={(e) => { setTaskName(e.target.value) }} />
                    <button className="btn btn-success m-2" onClick={addTask}>Add Task</button>
                </div>
            </div>
        </div>
    )
}
