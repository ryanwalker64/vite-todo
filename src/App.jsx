import { useEffect, useReducer, useState, createContext } from 'react'
import './App.css'

import TaskForm from './components/TaskForm'
import TaskList from './components/Tasklist'



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
    // if(state.length === 0) return
    window.localStorage.setItem('tasks', JSON.stringify(state))
  }, [state])


  return (
    <div className="App">
      <div>
        <span onClick={() => setFilter('all')} style={{margin: "0 10px 0 0"}}>All</span>
        <span onClick={() => setFilter('active')} style={{margin: "0 10px 0 0"}}>Active</span>
        <span onClick={() => setFilter('completed')}>Completed</span>
      </div>

      <TaskForm addTask={addTask}/>
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
  )
}

export default App



// use context for darkmode and task deletion/creation
