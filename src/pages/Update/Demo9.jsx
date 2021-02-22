import * as React from 'react'

function Son() {
  console.log('son render')
  return <div>Son</div>;
}

const memoizedSon = <Son />

export default class App extends React.Component {
  state = {
    name: 'a'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'b'
      })
    }, 2000)
  }

  render() {
    return memoizedSon
  }
}
