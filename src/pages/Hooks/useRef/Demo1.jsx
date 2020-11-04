import * as React from 'react'

export default function App(props) {
  const ref = React.useRef('a')
  return (
    <div>
      {ref.current.name}
    </div>
  )
}

