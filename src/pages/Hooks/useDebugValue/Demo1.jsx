import * as React from 'react'

export default function App(props) {
  const [isOnline, setIsOnline] = React.useState(true);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  debugger
  React.useDebugValue(isOnline ? "Online" : "Offline");
  return (
    <div>{isOnline}</div>
  )
}

