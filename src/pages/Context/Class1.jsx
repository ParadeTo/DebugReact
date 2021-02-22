import * as React from 'react'

const ThemeContext = React.createContext('light');

class Son extends React.Component {
  render() {
    console.log('son render')
    return <GrandSon />
  }
}

class GrandSon extends React.Component {
  static contextType = ThemeContext
  render() {
    console.log('grand son render')
    return <span>{this.context}</span>
  }
}

export default class Parent extends React.Component {
  state = {
    theme: 'red'
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        theme: 'blue'
      });
    }, 3000);
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Son />
      </ThemeContext.Provider>
    );
  }
}