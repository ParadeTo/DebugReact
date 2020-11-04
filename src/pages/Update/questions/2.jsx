import * as React from 'react'
import { useCallback, useState, useEffect } from 'react'

// 点击后，child render! 会打印吗
// 1
function Child() {
  console.log('child render!');
  return <div>Child</div>;
}


function Parent({ name }) {
  // 1
  const onClick = () => console.log('click')

  // 2
  // const onClick = useCallback(() => console.log('click'), [])

  return (
    <div>
      <div>{name}</div>
      <Child onClick={onClick} />
    </div>
  );
}


export default function App() {
  const [name, setName] = useState('a')

  useEffect(() => {
    setTimeout(() => {
      setName('b')
    }, 1000)
  }, [])

  return (
    <Parent name={name} />
  );
}
