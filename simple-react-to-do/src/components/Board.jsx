import React, { useState } from 'react'
import Task from './Task'

export default function Board({ show }) {
  const [tasksList, setTasksList] = useState([])
  const [ID, setId] = useState(0)

  const createNewTask = () => {
    const task = prompt('Enter a task to add')

    if (task === null) {
      return
    }

    if (task.trim() === '') {
      alert('Sorry, you cannot add a empty task.')
    } else {
      const newTask = {
        name: task,
        id: ID
      }
      setTasksList([...tasksList, newTask])
      setId(ID + 1)
    }
  }

  return (
    <div className={`bg-white w-72 md:w-[500px] min-h-32 flex flex-col items-center justify-between rounded-sm shadow-lg py-3 px-6 ${show ? 'block' : 'hidden'}`}>
      <div className='py-6'>
        {
          tasksList.map(task => (
            <Task title={task.name} key={task.id} />
          ))
        }
      </div>
      <button onClick={createNewTask} className='px-6 py-2 text-lg font-bold duration-150 ease-in-out delay-75 bg-indigo-400 rounded-full shadow-md text-slate-100 shadow-indigo-500 hover:bg-indigo-700'>+ New task</button>
    </div>
  )
}