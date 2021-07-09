import React from 'react'
import { useSelector } from 'react-redux';

export default function Navbar() {
    const taskObj = useSelector(store => store)
    return (
        <div style={{ backgroundColor: 'white', borderRadius: '10px' }} className="m-5">
            <h1>Redux - TodoList, Total tasks remained:{taskObj.taskItems.length}</h1>
        </div>
    )
}
