import React from 'react'

function Square({ label, onSquareClick }) {
    return (
        <div onClick={onSquareClick} className='square'>{label}</div>
    )
}

export default Square