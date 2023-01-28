import { useEffect, useReducer, useState } from 'react'

import TaskForm from './components/TaskForm'
import TaskList from './components/Tasklist'
import NavBar from './components/NavBar'



function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task]

    case "COMPLETE_TASK":
      return state.map(task => {
        return task.id !== action.id ? task : {...task, isComplete: !task.isComplete}
      })

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

  const addTask = (task) => dispatch({type: "ADD_TASK", task: task})
  const completeTask = (id) => dispatch({type: "COMPLETE_TASK", id: id})
  const deleteTask = (id) => dispatch({type: "DELETE_TASK", id: id})

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(state))
  }, [state])


  return (
    <div className="pt-10 h-full"> 
      <div className="w-11/12 max-w-lg m-auto rounded-lg bg-white shadow-md">
        <NavBar state={state} setFilter={setFilter} filter={filter}/>

        {/* <TaskForm addTask={addTask}/> */}
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



// use context for darkmode and task deletion/creation

//  The basic stuff, title, body, some states (like "done", priority levels etc.).
// Add users, so users can login and have their own todos
// Make sure both mobile and desktop experience are slick and usable
// Add some filters (like different categories for cards/todos, priorities, status etc.) to filter and sort your todos
// Add drag and drop rearrangement feature
// Add date and time reminders
// Pivot it towards KANBAN kind of app, with appropriate states and changes to layout. Maybe even support multiple layouts (KANBAN, classic, ...)
// Add projects (or "rooms") that could contain several users, to support the KANBAN design
// Add markdown editor to your "todo" body
// Some sort of invite functionality to support the KANBAN design
// Continue on adding features, swap some technologies somewhere along the journey to experience major PITA "refactorings"
