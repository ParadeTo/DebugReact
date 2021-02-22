import * as React from 'react'

class Son extends React.Component {
  shouldComponentUpdate() {
    debugger
    return false
  }

  render() {
    return <span>child</span>
  }
}

export default class App extends React.Component {
  componentDidMount(){
    setTimeout(() => {
      this.setState({})
    }, 2000)
  }

  render() {
    return <Son />
  }
}
