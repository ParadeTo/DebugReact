import * as React from 'react'

export default () => {
  const n = 3000
  return (
    <ul>
      {[...new Array(n)].map((_, i) => {
        return <li key={i}>{i}</li>
      })}
    </ul>
  )
}