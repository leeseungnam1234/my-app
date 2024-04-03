import React, { useEffect, useState } from 'react'
import Button from './Button'

const App = () => {
  const [counter, setValue] = useState(0)
  const onClick = () => setValue((prev) => prev + 1)
  console.log('i run all the time');
  useEffect(()=>{
    console.log('CALL THE AIP......');
  },[])
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </>
  )
}

export default App