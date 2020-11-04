import * as React from 'react'
import {useState} from 'react'

//
function Name({name}) {
  React.useEffect(() => {
    console.log('name 1')
    return () => {
      debugger
      console.log('useEffect destroy')
    }
  }, [])

  React.useLayoutEffect(() => {
    console.log('name 2')
    return () => {
      debugger
      console.log('useLayoutEffect destroy')
    }
  }, [])
  return <span>{name}</span>
}

export default function App() {
  const [isShowName, setIsShowName] = useState(true)
  return (
    <div>
      {isShowName && <Name name='ayou' />}
      <p onClick={() => setIsShowName(false)}>I am 18</p>
    </div>
  )
}
