import * as React from 'react'

// 点击后，child render! 会打印吗
// 1
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


export default function App() {
  return (
    <Parent>
      <Son/>
    </Parent>
  );
}

// 2
/*function Parent(props) {
  const [count, setCount] = React.useState(0);

  return (
    <div onClick={() => {setCount(count + 1)}}>
      count:{count}
      {props.children()}
    </div>
  );
}


export default function App() {
  return (
    <Parent>
      {() => <Son/>}
    </Parent>
  );
}*/


/*3

export default function App() {
  return (
    <Parent>
      <Son/>
    </Parent>
  );
}

function Parent(props) {
  const [count, setCount] = React.useState(0);

  return (
    <div onClick={() => {setCount(count + 1)}}>
      count:{count}
      {props.children()}
    </div>
  );
}


export default function App() {
  const S = <Son />
  return (
    <Parent>
      {() => S}
    </Parent>
  );
}
*/