import * as React from 'react'
import PropTypes from 'prop-types';

const Context = React.createContext({ value: 'context'})

class Child extends React.Component {
  render() {
    return <Context.Consumer>{value=>
       <span>{value}</span>
      }</Context.Consumer>
  }
}

class Parent extends React.Component {
  render() {
    console.log('parennt render')
    return <Child />
  }
}

const memoizedParent = <Parent />

export default class Ancestor extends React.Component {
  state = {
    value: 'context'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: 'new context'
      })
    }, 2000)
  }
  render() {
    return <Context.Provider value={this.state.value}>
      {memoizedParent}
    </Context.Provider>;
  }
}


