import * as React from 'react'

export default function App() {
  const [isNew, setIsNew] = React.useState(false)
  return (
    <>
      <button onClick={() => setIsNew(true)}>Switch</button>
      {
        isNew ?
        <ul>
          <li key='d'>d</li>
          <li key='a'>a</li>
          <li key='b'>b</li>
          <li key='c'>c</li>
        </ul> :
        <ul>
          <li key='a'>a</li>
          <li key='b'>b</li>
          <li key='c'>c</li>
          <li key='d'>d</li>
        </ul>
      }

    </>
  )
}