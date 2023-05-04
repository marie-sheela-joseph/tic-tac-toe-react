import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const onSquareClick = (i) => {
        if (xIsNext) {
            setSquares((prevState) => prevState.map((s, index) => index + 1 === i ? 'X' : s))
        } else {
            setSquares((prevState) => prevState.map((s, index) => index + 1 === i ? 'O' : s))
        }
        setXIsNext((prevState) => !prevState)
    }
    return (
        <div className='board'>
            <div className='board__row'>
                <Square label={squares[0]} onSquareClick={() => onSquareClick(1)} />
                <Square label={squares[1]} onSquareClick={() => onSquareClick(2)} />
                <Square label={squares[2]} onSquareClick={() => onSquareClick(3)} />
            </div>
            <div className='board__row'>
                <Square label={squares[3]} onSquareClick={() => onSquareClick(4)} />
                <Square label={squares[4]} onSquareClick={() => onSquareClick(5)} />
                <Square label={squares[5]} onSquareClick={() => onSquareClick(6)} />
            </div>
            <div className='board__row'>
                <Square label={squares[6]} onSquareClick={() => onSquareClick(7)} />
                <Square label={squares[7]} onSquareClick={() => onSquareClick(8)} />
                <Square label={squares[8]} onSquareClick={() => onSquareClick(9)} />
            </div>
        </div>
    )
}

export default Board
