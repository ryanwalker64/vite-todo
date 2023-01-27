import React, { useEffect } from "react"

function Task({task, completeTask, deleteTask}) {
  return (
    <div style={{width: "300px", display: 'flex', justifyContent: 'space-between'}}>
        <span  style={{textDecoration: task.isComplete ? 'line-through' : 'none'}} >{task.title}</span>
        <div>
            <span onClick={completeTask} style={{filter: task.isComplete ? 'saturate(1)' : 'saturate(0)'}}>✅</span>
            <span onClick={deleteTask}>❌</span>
        </div>
    </div>
  )
}

export default Task