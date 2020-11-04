import * as React from 'react'
import {useState} from 'react'

export default function App(props) {
  const [num, setNum] = useState(0)
  React.useEffect(() => {
    console.log(1)
  }, [])
  React.useEffect(() => {
    console.log(2, num)
  }, [num])
  return <div onClick={() => setNum(num+1)}>{num}</div>
}
