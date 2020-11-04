import * as React from 'react'
import {useState, useEffect, useCallback, memo} from 'react'

const Child = memo(({ onClick }) => {
  console.log(`child render`)
  return <div onClick={onClick}>Child</div>
})

const Parent = ({ name }) => {
  // 1
  // const onClick = () => console.log('click')

  // 2
  const onClick = useCallback(() => console.log('click'), [])
  return (
    <div>
      <div>{name}</div>
      <Child onClick={onClick} />
    </div>

  )
}


export default function App() {
  const [name, setName] = useState('a')
  useEffect(() => {
    setTimeout(() => {
      setName('b')
    }, 2000)
  }, [])
  return <Parent name={name} />
}

