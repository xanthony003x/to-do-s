import React from 'react'
import Menu from '../assets/menu-2.svg'

function Header({ sendShowBoardState }) {

  const handleClick = () => {
    sendShowBoardState()
  }

  return (
    <div className='w-72 md:w-[500px] bg-indigo-400 rounded-sm shadow-lg flex p-4 items-center'>
      <div>
        <img onClick={handleClick} className='duration-150 ease-in-out delay-75 cursor-pointer invert size-8 hover:opacity-70' src={Menu} />
      </div>
      <div className='grid grow place-items-center'>
        <span className='text-lg font-bold text-slate-100'>Website todo</span>
      </div>
    </div>
  )
}

export default Header