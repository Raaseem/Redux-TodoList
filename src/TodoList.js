import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
    const taskObj = useSelector(store => store);

    const taskItem = taskObj.taskItems.map((task) => {
        return (
            <TodoItem task={task} key={task} />
        )
    })
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6 m-5 p-3" style={{ backgroundColor: 'white', borderRadius: '4px' }}>
                    {taskItem}
                </div>
            </div>

        </div>
    )
}
