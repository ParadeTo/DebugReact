import * as React from 'react'

export default function App(props) {
  const [num, setNum] = React.useState(0)
  const onClick1 = React.useCallback(() => console.log(1), [])
  const onClick2 = React.useCallback(() => console.log(num), [num])
  return (
    <div onClick={() => setNum(1)}>useCallback</div>
  )
}

