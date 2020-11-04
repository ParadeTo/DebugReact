import * as React from 'react'

const channel = new MessageChannel()

// onmessage 是一个宏任务
channel.port1.onmessage = () => {
  console.log('1 message channel')
}

export default function App() {
  React.useEffect(() => {
    console.log('2 use effect')
  }, [])

  Promise.resolve().then(() => {
    console.log('3 promise')
  })

  React.useLayoutEffect(() => {
    console.log('4 use layout effect')
    channel.port2.postMessage('')
  }, [])
  return <div>App</div>
}
