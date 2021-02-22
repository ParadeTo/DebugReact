import * as React from 'react'
import PropTypes from 'prop-types';

class Child extends React.Component {
  render() {
    // console.log(this.context);
    console.log('Child render')
    return <span>{this.props.name}</span>
  }
}

// Child.contextTypes = {
//   value: PropTypes.string
// };

class Parent extends React.Component {
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
    console.log('Parent render')
    return <Child name={this.state.name} />
  }
}

class Silbing extends React.Component {
  render() {
    console.log('Silbing render')
    return <span>Silbing</span>
  }
}

export default class Ancestor extends React.Component {
  // state = {
  //   value: 'context'
  // }
  getChildContext() {
    return 'name'
  }

  render() {
    console.log('Ancestor render')
    return <><Parent /><Silbing/></>;
  }
}

Ancestor.childContextTypes = {
  value: PropTypes.string
}
