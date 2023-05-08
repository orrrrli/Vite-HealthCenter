import { useState } from 'react'
import { Button } from '@chakra-ui/react'

/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/prop-types
function Square () {
  const [value, setValue] = useState(null)
  function handleClick () {
    setValue('X')
  }
  return (
    <Button
    variant='solid'
    size='lg'
    onClick={handleClick}
    >
      {value}
    </Button>
  )
}

/* eslint-disable react/react-in-jsx-scope */
export function Board () {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}
