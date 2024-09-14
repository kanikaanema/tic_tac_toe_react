import React, { useState } from 'react'
import Squares from "./Squares.js"
// import { text } from 'body-parser'

function Board(props) {

  const [isnext, setIsnext] = useState(true)
  const [square, setSquare] = useState(Array(9).fill(null))


  function handleClick(index) {

    if (square[index]) {
      return
    }


    if (winner(square)) {

      return
    }
    const newSquare = [...square]
    newSquare[index] = isnext ? "X" : "O"
    setSquare(newSquare)
    setIsnext(!isnext)



    console.log(newSquare)

  }

  function winner(currentSquare) {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    for (let i = 0; i < winnerArray.length; i++) {
      const [a, b, c] = winnerArray[i]
      if (currentSquare && currentSquare[a] === currentSquare[b] && currentSquare[a] === currentSquare[c]) {
        return currentSquare[a]
      }
    }
    return null

  }

  function restart() {
    setSquare(Array(9).fill(null))
    setIsnext(true)
  }
  const win = winner(square)


  return (
    <div className='board'>
      {square.map((value, index) => (
        <Squares value={value}
          onSquareClick={() => handleClick(index)}
        />
      ))}
      <section >
        <h1>{win && `winner is ${win}`}</h1>
        <div>{isnext ? '"X" turn' : '"O"turn' }</div>
        <h2 className='restart' onClick={restart}>restart</h2>
      </section>
    </div>
  )
}

export default Board