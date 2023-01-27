import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"

function TaskForm({addTask}) {
    const [taskTitle, setTaskTitle] = useState('')

    function handleNewTaskSubmit(e) {
        e.preventDefault()
        console.log(taskTitle)

        const newTaskObj = {
            title: taskTitle,
            isComplete: false,
            id: nanoid()
        }

        addTask(newTaskObj)
        setTaskTitle('')
    }

    return (
      <form onSubmit={handleNewTaskSubmit}>
        <input 
            value={taskTitle} 
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Add a task"
            style={{textAlign: 'center', width: '300px'}}
        />
      </form>
    )
  }

export default TaskForm