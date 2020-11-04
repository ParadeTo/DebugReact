import * as React from 'react'

export default class App extends React.Component {
  state = {
    num: 0,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({num: this.state.num + 1})
      this.setState({num: this.state.num + 1})
    })
  }

  render() {
    return <div id='outer'>{this.state.num}</div>
  }
}
