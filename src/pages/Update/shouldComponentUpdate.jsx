import * as React from 'react'

function Son({name}) {
  return <div>{name}</div>;
}


class Parent extends React.Component {
  shouldComponentUpdate() {
    debugger
    return false
  }

  render() {
    return <Son name={this.props.name} />
  }
}


export default class App extends React.Component {
  state = {
    name: 'a'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'b'
      })
    }, 1000);
  }

  render() {
    return (
      <Parent name={this.state.name} />
    );
  }
}
