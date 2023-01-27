import React, { useEffect, useContext } from "react"
import { DarkModeContext } from "./DarkModeContext"

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
        <DarkModeContext.Provider value= >
            <div>
            {tasksDOM}
            </div>
        </DarkModeContext.Provider>
    )
  }
export default TaskList