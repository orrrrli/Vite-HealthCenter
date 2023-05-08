import { useState } from 'react'
import { Button } from '@chakra-ui/react'

/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/prop-types
function Square ({ value, onSquareClick }) { // value es una propiedad que se le pasa al componente Square y almacena el valor del boton y onSquareClick es una funcion que actualiza el valor del boton
  return (
    <Button
    className='square'
    variant='outline'
    colorScheme='black'
    size='md'
    onClick={onSquareClick} // on SquareClick es una funcion que se ejecuta cuando se hace click en el boton nos permite comunicarnos con el componente padre (Board)
    >
      {value}
    </Button>
  )
}

/* eslint-disable react/react-in-jsx-scope */
export function Board () {
  const [xIsNext, setXIsNext] = useState(true) // crea una variable de estado que se inicializa en true por lo tanto el primer jugador es X
  const [squares, setSquares] = useState(Array(9).fill(null)) // crea una matriz con nueve elementos y establece cada uno de ellos en null
  function handleClick (i) {
    if (squares[i] || calculateWinner(squares)) return // si el elemento de la matriz ya tiene un valor no hace nada (evita que se sobreescriba el valor
    const nextSquares = squares.slice() // crea una copia de la matriz squares
    if (xIsNext) {
      nextSquares[i] = 'X' // establece el primer elemento de la matriz en X
    } else {
      nextSquares[i] = 'O' // establece el elemento de la matriz en O
    }
    setSquares(nextSquares) // actualiza el estado de la matriz squares
    setXIsNext(!xIsNext) // actualiza el estado de la variable xIsNext
  }
  const winner = calculateWinner(squares) // llama a la funcion calculateWinner y le pasa la matriz squares
  let status // crea una variable status
  if (winner) {
    status = 'Winner: ' + winner // si hay un ganador establece el valor de la variable status en Winner: X o Winner: O
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O') // si no hay ganador establece el valor de la variable status en Next player: X o Next player: O
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
  )
}

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
