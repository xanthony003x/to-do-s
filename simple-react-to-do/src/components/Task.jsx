import React from 'react'
import Icon from '../assets/trash.svg'
import { useState } from 'react'

function Task({ title }) {
  const [isChecked, setIsChecked] = useState(false)

  const completed = () => {
    setIsChecked(!isChecked)
  }

  const delteTask = (e) => {
    e.target.parentNode.style.display = 'None'
  }

  return (
    <div className='flex w-64 md:w-[460px] gap-4 justify-between items-center mb-6'>
      <div className='flex items-center gap-3'>
        <input readOnly checked={isChecked} onClick={completed} className='border-indigo-400 accent-indigo-400 size-5' type='radio'></input>
        <h1 className={`break-words text-slate-600 w-44 md:w-[370px] text-xl ${isChecked ? 'line-through text-gray-200' : ''}`}>{title}</h1>
      </div>
      <img onClick={delteTask} className='duration-150 ease-in-out delay-75 cursor-pointer opacity-55 size-8 hover:scale-75 hover:opacity-80' src={Icon} />
    </div>
  )
}

export default Task