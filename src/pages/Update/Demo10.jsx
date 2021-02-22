import * as React from 'react'

function Son() {
  const [count, setCount] = React.useState(1)
  return <div onClick={() => setCount(2)}>{count}</div>;
}

const memoizedSon = <Son />

export default class App extends React.Component {
  render() {
    return memoizedSon
  }
}
