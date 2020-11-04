import * as React from 'react'

class Child extends React.Component {
  componentDidMount() {
    console.log('child')
    debugger
  }

  render() {
    return <p id='child'>child</p>
  }
}

export default class App extends React.Component {
  state = {
    num: 0,
  }

  componentDidMount() {
    debugger
  }

  render() {
    return (
      <div id='app'>
        {/* {this.state.num === 1 ? <span>span</span> : 0} */}
        <Child />
      </div>
    )
  }
}
