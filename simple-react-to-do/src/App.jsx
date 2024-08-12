import { useState } from "react"
import Board from "./components/Board"
import Header from "./components/Header"

export default function App() {
  const [boardState, setBoardState] = useState(false)

  const handleBoardState = () => {
    setBoardState(!boardState)
    console.log(!boardState)
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 bg-blue-100">
      <Header sendShowBoardState={handleBoardState} />
      <Board show={boardState} />
    </div>
  )
}