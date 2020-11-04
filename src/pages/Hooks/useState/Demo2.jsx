import * as React from 'react'
import {useState} from 'react'

export default function App(props) {
  const [num, setNum] = useState(0)

  setTimeout(() => {
    debugger
    setNum(1)
  }, 3000)
  return <div>{num}</div>
}
