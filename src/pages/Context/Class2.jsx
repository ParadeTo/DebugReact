import * as React from 'react'

const ThemeContext = React.createContext('light');

class Son extends React.Component {
  componentDidUpdate(){
    console.log('son updated');
  }

  render() {
    console.log('son render')
    return <GrandSon />
  }
}

class GrandSon extends React.Component {

  static contextType = ThemeContext

  componentDidUpdate(){
    console.log('grand son updated');
  }

  render() {
    console.log('grand son render')
    return (
      <ThemeContext.Consumer>
          {value => <span>{this.context}</span>}
      </ThemeContext.Consumer>
    )
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
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Son />
      </ThemeContext.Provider>
    );
  }
}