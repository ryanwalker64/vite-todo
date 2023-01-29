import React, {  } from "react"
import NavBtn from "./NavBtn"

function NavBar({state, filter, setFilter, setOpenTaskForm}) {

    return (
      <div className="flex gap-5 px-6 border-b border-slate items-center">
              <NavBtn 
                name="All" 
                setFilter={() => setFilter('all')} 
                isActive={filter === 'all' && true} 
                taskCount={state.length}/>
  
              <NavBtn 
                name="Active" 
                setFilter={() => setFilter('active')} 
                isActive={filter === 'active' && true} 
                taskCount={state.filter(task => task.isComplete === false).length}/>
  
              <NavBtn 
                name="Completed" 
                setFilter={() => setFilter('completed')} 
                isActive={filter === 'completed' && true}
                taskCount={state.filter(task => task.isComplete === true).length}/>
            
              <button 
                onClick={() => setOpenTaskForm(prev => !prev)} 
                className="ml-auto border-purple-500 bg-purple-600 px-3 py-1 rounded-lg text-white
                 hover:bg-purple-500">
                  Add +
              </button>
      
          </div>
    )
  }

export default NavBar