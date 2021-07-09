import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function TodoItem({ task }) {

    const [newTask, setnewTask] = useState('')
    const [show, setShow] = useState('none');
    const dispatch = useDispatch()

    function editTask(task) {
        setShow('inline')
    }

    function deleteTask(task) {
        dispatch({ type: 'DELETE_TASK', payload: task })
    }

    function finalEdit(task) {
        dispatch({ type: 'EDIT_TASK', payload: { oldTask: task, newTask: newTask } })
        setShow('none')
    }

    return (
        <div>
            <div className="row justify-content-center" >
                <div className="col-md-9">
                    <h1>{task}</h1>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={editTask}>Edit</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-danger" onClick={() => deleteTask(task)}>Delete</button>
                </div>

                <input type="text" style={{ display: show }} className="form-control w-50" value={newTask} onChange={(e) => setnewTask(e.target.value)} />
                <button className="btn btn-success w-25 m-1" style={{ display: show }} onClick={() => finalEdit(task)}>Final Edit</button>
            </div>
            <hr style={{ borderColor: 'black' }} />
        </div>
    )
}
