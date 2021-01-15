import * as React from 'react'


function Parent(props) {
  const [count, setCount] = React.useState(0);

  return (
    <div onClick={() => {setCount(count + 1)}}>
      count:{count}
    </div>
  );
}


export default function App() {
  console.log('App Render')

  return (
    <Parent />
  );
}
