import * as React from 'react'


class Child extends React.Component {
  componentDidUpdate() {
    console.log('update')
  }

  componentDidMount() {
    console.log('mount')
  }


  render() {
    console.log('render')
    return <span>child</span>
  }
}

export default function App() {
  const [num, setNum] = React.useState(1)

  React.useEffect(() => {
    setTimeout(() => {
      setNum(2)
    }, 1000)
  }, [])

  return (
    <Child />
  );
}
