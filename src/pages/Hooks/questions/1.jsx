import * as React from 'react'
import {useState} from 'react'


// export default function App(props) {
//   const [num, setNum] = useState(0)
//   return <div onClick={() => {
//     setNum(num+1)
//     setNum(num+1)
//   }}>{num}</div>
// }


export default function App(props) {
  const [num, setNum] = useState(0)
  React.useEffect(() => {
    setTimeout(() => {
      setNum(num+1)
      setNum(num+1)
    }, 1000)
  }, [])
  return <div onClick={() => {

  }}>{num}</div>
}