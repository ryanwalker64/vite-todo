import { useEffect, useReducer, useState } from 'react'

import TaskForm from './components/TaskForm'
import TaskList from './components/Tasklist'
import NavBar from './components/NavBar'




function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": return [...state, action.task]

    case "COMPLETE_TASK": return state.map(task => task.id !== action.id ? task : {...task, isComplete: !task.isComplete})

    case "DELETE_TASK":
      const newTaskList = state.filter(task => task.id !== action.id)
      if (newTaskList.length === 0) return []
      return newTaskList

    default: throw Error('add action type')
  }
}



function App() {
  const [state, dispatch] = useReducer(taskReducer, 
    JSON.parse(window.localStorage.getItem('tasks')) || [])

  const [filter, setFilter] = useState('all')
  const [openTaskForm, setOpenTaskForm] = useState(state.length < 1 ? true : false)

  const addTask = (task) => dispatch({type: "ADD_TASK", task: task})
  const completeTask = (id) => dispatch({type: "COMPLETE_TASK", id: id})
  const deleteTask = (id) => dispatch({type: "DELETE_TASK", id: id})

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(state))
  }, [state])


  return (
    <div className="pt-10"> 
      
      {openTaskForm && <TaskForm addTask={addTask} setOpenTaskForm={setOpenTaskForm}/>}

      <div className="w-11/12 max-w-lg m-auto rounded-lg bg-white shadow-md">
        <NavBar state={state} setFilter={setFilter} filter={filter} setOpenTaskForm={setOpenTaskForm}/>

        <TaskList 
        tasks={
          filter === 'active' 
          ? state.filter(task => task.isComplete === false) 
          : filter === 'completed'  
            ? state.filter(task => task.isComplete === true)
            : state} 
        completeTask={completeTask} 
        deleteTask={deleteTask}/> 
      </div>
    </div>
  )
}

export default App


// Priority Levels >> appear close to top
// Open 1 Task
// Edit tasks
// Add animation library
// Add sort by due-date
// Add markdown editor to your "todo" body

// Kanban 
  // Create columns
  // Move tasks between columns
  // delete columns
  // FOCUS MODE: hide other columns

// Make projects that store kanban board
  // make a project
  // delete a project

//Setup an overview page for "stats"

// Add drag and drop rearrangement feature
// Add users, so users can login and have their own todos
// Setup a simple backend
// Make sure both mobile and desktop experience are slick and usable
// Some sort of invite functionality to support the KANBAN design
// Continue on adding features, swap some technologies somewhere along the journey to experience major PITA "refactorings"
