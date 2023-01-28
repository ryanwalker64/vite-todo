import React, { useEffect } from "react"

import Task from "./Task"


function TaskList({tasks, completeTask, deleteTask}) {
    if (tasks.length === 0) return "No tasks"

    const tasksDOM = tasks.map(task => {
        return (
        <Task 
            task={task} 
            key={task.id} 
            completeTask={() => completeTask(task.id)}  
            deleteTask={() => deleteTask(task.id)}
            />
                )
    })
    
    return (

            <div className="px-6 py-5">
            {tasksDOM}
            </div>
    )
  }
export default TaskList