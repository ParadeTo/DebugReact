import * as React from 'react'

function Son() {
  console.log('child render!');
  return <div>Son</div>;
}


function Parent(props) {
  const [count, setCount] = React.useState(0);

  return (
    <div onClick={() => {setCount(count + 1)}}>
      count:{count}
      {props.children}
    </div>
  );
}

// App 有更新操作，不会复用 FiberNode
export default function App() {
  const [name, setName] = React.useState('ayou')
  React.useEffect(() => {
    setTimeout(() => {
      setName('xingzhi')
    }, 3000)
  }, [])
  return (
    <Parent name={name}>
      <Son/>
    </Parent>
  );
}
