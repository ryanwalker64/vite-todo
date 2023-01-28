import React, { useEffect, useState, useRef } from "react"
import { nanoid } from "nanoid"
import TextareaAutosize from 'react-textarea-autosize';

function TaskForm({addTask, setOpenTaskForm}) {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    function formValidation() {
      if (taskDescription.length > 0 && taskTitle.length < 1) console.log('no title')
    }

    useEffect(() => {
      formValidation()
    }, [taskDescription])

    function handleNewTaskSubmit(e) {
        e.preventDefault()
        console.log(taskTitle)

        const newTaskObj = {
            title: taskTitle,
            description: taskDescription,
            isComplete: false,
            id: nanoid()
        }

        addTask(newTaskObj)
        setTaskTitle('')
        setTaskDescription('')
    }

    return (
      <form onSubmit={handleNewTaskSubmit} className="w-11/12 max-w-lg m-auto rounded-lg bg-white shadow-md mb-3 px-5 py-5">
        <input 
            value={taskTitle} 
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task name here..."
            className="w-full mb-2"
        />
          <TextareaAutosize
             placeholder="Description"
             className="w-full text-sm"
             value={taskDescription}
             onChange={(e) => setTaskDescription(e.target.value)}
          />
        <button type="button" 
          onClick={() => setOpenTaskForm(false)} 
          className="border px-4 py-1 rounded-lg text-slate-500 mr-3 hover:bg-slate-400 hover:text-white">
            Cancel
          </button>
        <button type='submit'
          className="border-purple-500 bg-purple-600 px-4 py-1 rounded-lg text-white hover:bg-purple-500">
            Add Task
          </button>
      </form>
    )
  }

export default TaskForm