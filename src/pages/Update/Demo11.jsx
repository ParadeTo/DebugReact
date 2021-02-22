import * as React from 'react'

function Son() {
  const [count, setCount] = React.useState(1)
  return <div onClick={() => setCount(2)}>{count}</div>;
}

const MemoizedSon = React.memo(Son, () => true)

export default class App extends React.Component {
  componentDidMount(){
    setTimeout(() => {
      this.setState({})
    }, 2000)
  }

  render() {
    return <MemoizedSon />
  }
}
