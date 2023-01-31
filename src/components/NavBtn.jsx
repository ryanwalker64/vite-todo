import React, { useEffect } from "react"

function NavBtn({name, setFilter, isActive, taskCount}) {
    return (
      <button 
              className={`font-medium flex gap-2 py-4 text-sm opacity-50 ${isActive && 'border-b-2 border-purple-400 opacity-100'} `}
              onClick={setFilter}>
                {name} 
                {taskCount > 0 && <span className='bg-purple-100 px-2 py-1 rounded-full text-xs align-middle'>{taskCount}</span> }
      </button>
    )
  }

export default NavBtn