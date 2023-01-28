import React, {  } from "react"

function NavBtn({name, setFilter, isActive, taskCount}) {
    return (
      <button 
              className={`font-medium flex gap-2 py-4 opacity-50 ${isActive && 'border-b-2 border-purple-400 opacity-100'} `}
              onClick={setFilter}>
                {name} 
                {taskCount > 0 && <span className='bg-purple-100 px-2 py-1 rounded-full text-xs align-middle'>{taskCount}</span> }
      </button>
    )
  }
  
function NavBar({state, filter, setFilter}) {


    return (
      <div className="flex gap-5 px-6 border-b border-slate">
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
          </div>
    )
  }

export default NavBar