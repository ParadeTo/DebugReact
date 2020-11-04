import * as React from 'react'
import {useState} from 'react'

export default function App(props) {
  const [num, setNum] = useState(0)

  React.useEffect(() => {
    debugger
    setNum(num => num + 1)
    debugger
    setNum(num => num + 1)
  }, [])

  return (
    <div>
      {num}
    </div>
  )
}
