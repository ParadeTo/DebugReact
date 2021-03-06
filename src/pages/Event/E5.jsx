import * as React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    document.addEventListener('click', () => {
      console.log('C: native document click')
    })
  }

  innerClick = (e) => {
    console.log('A: react inner click.')
  }

  outerClick = (e) => {
    console.log('B: react outer click.')
    e.stopPropagation()
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      console.log('D: native document click')
    })
  }

  render() {
    return (
      <div id='outer' onClickCapture={this.outerClick}>
        <button id='inner' onClick={this.innerClick}>
          BUTTON
        </button>
      </div>
    )
  }
}
