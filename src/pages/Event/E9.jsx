import * as React from 'react'

export default class extends React.Component {
  innerClick = (e) => {
    console.log(e)
    e.persist()
    setTimeout(() => {
      console.log(e)
    }, 0)
  }

  render() {
    return (
      <div id='outer'>
        <button id='inner' onClick={this.innerClick}>
          BUTTON
        </button>
      </div>
    )
  }
}
