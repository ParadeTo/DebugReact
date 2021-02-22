import * as React from 'react'
import PropTypes from 'prop-types';

class Child extends React.Component {
  render() {
    console.log('child render');
    return <span>{this.context.value}</span>
  }
}

Child.contextTypes = {
  value: PropTypes.string
};

class Son extends React.Component {
  render() {
    console.log('child render')
    return <span>{this.context.value}</span>
  }
}

Son.contextTypes = {
  value: PropTypes.string
};

const memoizedSon = <Son />

export default class App extends React.Component {
  state = {
    value: 'context'
  }
  getChildContext() {
    return this.state
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: 'new context'
      })
    }, 1000)
  }
  render() {
    return memoizedSon;
  }
}

App.childContextTypes = {
  value: PropTypes.string
}
