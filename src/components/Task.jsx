import React, { useEffect } from "react"
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline' 


function Task({task, completeTask, deleteTask}) {
  return (
    <div className="border-b pb-6 flex mb-4">
        <div  
          onClick={completeTask} 
          className={`
          border w-5 h-5 rounded-full border-slate-300 mr-3 text-xs cursor-pointer mt-1 shrink-0
        hover:border-purple-500
          ${task.isComplete && 'bg-purple-500 border-purple-500'}`}>
          </div>
          <div className={task.isComplete ? 'opacity-50' : undefined}>
            <p className="font-medium">{task.title}</p>
            <p className="font-normal text-sm text-slate-400">{task.description}</p>

            <div className="flex gap-2 mt-2 text-slate-400">
              <div className="flex gap-2 items-center">
                <CalendarIcon className="h-4 w-4"/>
                <span className="font-normal text-sm">6 Apr 2022</span>
              </div>
              <span>•</span>
              <div className="flex gap-2 items-center">
                <UserIcon className="h-4 w-4"/>
                <span className="font-normal text-sm">Ryan Walker</span>
              </div>
            </div>
            

          </div>
        <div>
            {/* <span onClick={deleteTask}>❌</span> */}
        </div>
    </div>
  )
}

export default Task