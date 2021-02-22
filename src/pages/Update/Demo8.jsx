import * as React from 'react'

function Son() {
  console.log('child render!');
  return <p>Son</p>;
}


function Parent(props) {
  const [count, setCount] = React.useState(0);

  return (
    <div onClick={() => {setCount(count + 1)}}>
      <span>{count}</span>
      {props.children}
    </div>
  );
}


export default function App() {
  return (
    <Parent>
      <Son />
    </Parent>
  );
}
