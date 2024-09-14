import React, { useState } from 'react'

function Squares({value, onSquareClick}) {

  return (
    <>
    <div className='square box' onClick={onSquareClick}>{value}</div>
   
    </>
  )
}

export default Squares