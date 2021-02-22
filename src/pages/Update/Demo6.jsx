import * as React from 'react'


export default function App() {
  const [num, setNum] = React.useState(1)

  React.useEffect(() => {
    setTimeout(() => {
      setNum(2)
    }, 2000)
  }, [])

  return (
    <ul>
      {/* {[...new Array(num)].map((_, i)=>{
        return <li data-num={num}>{i}</li>
      })} */}
    </ul>
  );
}
