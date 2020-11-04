import * as React from 'react'
import {useState} from 'react'

export default function App(props) {
  const [num, setNum] = useState(0)
  const [name, setName] = useState('ayou')
  return (
    <div onClick={() => {
      debugger
      setNum(num + 1)
      setNum(num + 2)
    }}>
      {num}{name}
    </div>
  )
}
