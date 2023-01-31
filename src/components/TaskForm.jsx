import React, { useEffect, useState, useRef } from "react"

import { nanoid } from "nanoid"
import TextareaAutosize from 'react-textarea-autosize';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";


function TaskForm({addTask, setOpenTaskForm}) {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState(null)
    const [priority, setPriority] = useState('null')

    const dateRef = useRef(null)

    function formValidation() {
      if (taskDescription.length > 0 && taskTitle.length < 1) console.log('no title')
    }

    useEffect(() => {
      formValidation()
    }, [taskDescription])

    function handleNewTaskSubmit(e) {
        e.preventDefault()

        const newTaskObj = {
            title: taskTitle,
            description: taskDescription,
            isComplete: false,
            dueDate: taskDate,
            priority: priority,
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
             className="w-full text-sm mb-8"
             value={taskDescription}
             onChange={(e) => setTaskDescription(e.target.value)}
          />

        <div className="w-full flex justify-between items-center">

        <select 
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className={`shrink-0 border px-2 py-1 rounded-lg  mr-3 appearance-none text-center text-xs
          ${priority === 'high' 
              ? 'text-red-500 border-red-500' 
              : priority === 'medium'
                ? 'text-yellow-500 border-yellow-500'
                : priority === 'low' 
                  ? 'text-green-500 border-green-500'
                  : 'text-slate-500 border-slate-500'}`}>
            <option>Priority Level</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
        </select>
          {/* <DatePicker 
            selected={taskDate} 
            onChange={(date) => setTaskDate(date)} 
            dateFormat="d MMM yyyy"
            placeholderText="Due Date"
            className=" border px-4 py-1 rounded-lg text-slate-500 w-32 mr-auto"
            todayButton="Today"
            /> */}
            

           {/* <button type="button" // Custom Date function
            ref={myRef}
            className="shrink-0 border px-4 py-1 rounded-lg text-slate-500 mr-3 hover:bg-slate-400 hover:text-white">
              Cancel
            </button> */}

          <button type='submit'
            className="shrink-0 border-purple-500 bg-purple-600 px-4 py-1 rounded-lg text-white hover:bg-purple-500">
              Add Task
            </button>

        </div>
      </form>
    )
  }

export default TaskForm