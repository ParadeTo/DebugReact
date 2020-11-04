import * as React from 'react'
import {useState} from 'react'

function Name({name}) {
  React.useEffect(() => {
    console.log(`name useEffect`)
    return () => {
      console.log('name destroy')
    }
  }, [name])

  return <span>{name}</span>
}

export default function App() {
  const [name, setName] = useState('ayou')

  React.useEffect(() => {
    console.log(`app useEffect`)
    return () => {
      console.log('app destroy')
    }
  }, [name])

  return (
    <div>
      <Name name={name} />
      <p onClick={() => setName('xingzhi')}>I am 18</p>
    </div>
  )
}
