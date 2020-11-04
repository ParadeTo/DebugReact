import * as React from 'react'

function Name({name}) {
  React.useEffect(() => {
    console.log('name')
  }, [])
  return <span>{name}</span>
}

function Gender() {
  return <i>Male</i>
}

class A extends React.Component {
  UNSAFE_componentWillMount() {
    debugger
  }
  render() {
    return null
  }
}

export default function App() {
  const [name, setName] = React.useState('ayou')
  return (
    <div>
      <Name name={name} />
      <p
        onClick={() => {
          debugger
          setName('xingzhi')
        }}>
        I am 18
      </p>
      <A />
      <Gender />
    </div>
  )
}
