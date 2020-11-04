import * as React from 'react'
import {useState} from 'react'

function Name({name}) {
  React.useEffect(() => {
    console.log(`useEffect ${name}`)
    return () => {
      console.log('useEffect destroy')
    }
  }, [name])

  React.useLayoutEffect(() => {
    console.log(`useLayoutEffect ${name}`)
    return () => {
      console.log('useLayoutEffect destroy')
    }
  }, [name])
  return <span>{name}</span>
}

function Gender() {
  return <i>Male</i>
}

export default function App() {
  const [name, setName] = useState('ayou')
  return (
    <div>
      <Name name={name} />
      <p onClick={() => setName('xingzhi')}>I am 18</p>
      <Gender />
    </div>
  )
}
