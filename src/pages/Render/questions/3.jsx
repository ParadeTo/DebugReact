import * as React from 'react'
import {useState} from 'react'

function Name({name}) {
  React.useEffect(() => {
    console.log(`useEffect ${name}`)
    return () => {
      console.log(`useEffect destroy ${name}`)
    }
  }, [name])

  React.useLayoutEffect(() => {
    console.log(`useLayoutEffect ${name}`)
    return () => {
      console.log(`useLayoutEffect destroy ${name}`)
    }
  }, [name])
  return <span>{name}</span>
}

// 点击后，下面事件发生的顺序
// 1. 页面显示 xingzhi
// 2. console.log('useLayoutEffect destroy ayou')
// 3. console.log(`useLayoutEffect xingzhi`)
// 4. console.log('useEffect destroy ayou')
// 5. console.log(`useEffect xingzhi`)
export default function App() {
  const [name, setName] = useState('ayou')
  return (
    <div>
      <Name name={name} />
      <p onClick={() => setName('xingzhi')}>I am 18</p>
      <div>{name}</div>
    </div>
  )
}
