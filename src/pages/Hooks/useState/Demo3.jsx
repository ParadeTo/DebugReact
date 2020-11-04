import * as React from 'react'
import {useState} from 'react'

export default function App(props) {
  const [num, setNum] = useState(0)
  const [name, setName] = useState('ayou')
  return (
    <div onClick={() => {
      setTimeout(() => {
        setNum(num => num + 1)
        debugger
        setNum(num => num + 1)
      })
    }}>
      {num}{name}
    </div>
  )
}
