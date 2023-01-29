import React, { useEffect } from "react"
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline'
import { compareAsc, format } from 'date-fns'


function Task({task, completeTask, deleteTask}) {


  
  return (
    <div className="group border-b pb-6 flex mb-4">
        <div  
          onClick={completeTask} 
          className={`
          border w-5 h-5 rounded-full border-slate-300 mr-3 text-xs cursor-pointer mt-1 shrink-0
        hover:border-purple-500
          ${task.isComplete && 'bg-purple-500 border-purple-500'}`}>
        </div>

        <div className={`w-full ${task.isComplete ? 'opacity-50' : undefined}`}>
            <div className=" flex justify-between w-full">
              <p className="font-medium">{task.title}</p>
              <button type="button" 
                onClick={() => deleteTask()} 
                className="shrink-0 border px-2 py rounded-lg text-slate-300  hover:bg-red-200 hover:text-white opacity-0 group-hover:opacity-100">
                  x
              </button>
            </div>
            <p className="font-normal text-sm text-slate-400">{task.description}</p>

            <div className="flex gap-2 mt-2 text-slate-400">
              {task.dueDate && 
                <>
                  <div className="flex gap-2 items-center">
                    <CalendarIcon className="h-4 w-4"/>
                    <span className={`
                    font-normal text-sm
                    ${format(new Date(task.dueDate), 'd MMM yyyy') === format(new Date(), 'd MMM yyyy')
                        ? `text-green-500`    // dueDate isn't today or in the past
                        : compareAsc((new Date(task.dueDate)),new Date()) === -1
                          ? `text-red-500`  // dueDate has past
                          : ``  // dueDate is in the future
                        }`}>
                      {format(new Date(task.dueDate), 'd MMM yyyy') === format(new Date(), 'd MMM yyyy')
                        ? 'Today'
                        : format(new Date(task.dueDate), 'd MMM yyyy')}
                    </span>
                  </div>
                  <span>•</span>
                </>
              }
              <div className="flex gap-2 items-center">
                <UserIcon className="h-4 w-4"/>
                <span className="font-normal text-sm">Ryan Walker</span>
              </div>
            </div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Task