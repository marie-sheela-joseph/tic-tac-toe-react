import React, { useState } from 'react'
import Square from './Square'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const [numberOfMoves, setnumberOfMoves] = useState(0)
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const onSquareClick = (i) => {
        if (squares[i - 1] || calculateWinner(squares)) {
            return;
        }
        if (xIsNext) {
            setSquares((prevState) => prevState.map((s, index) => index + 1 === i ? 'X' : s))
        } else {
            setSquares((prevState) => prevState.map((s, index) => index + 1 === i ? 'O' : s))
        }
        setnumberOfMoves((prevState) => prevState + 1)
        setXIsNext((prevState) => !prevState)
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = numberOfMoves === squares.length ? 'Tie Game' : "Next Player: " + (xIsNext ? "X" : "O");
    }
    return (
        <>
            <div className="status">{status}</div>
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
        </>
    )
}

export default Board
