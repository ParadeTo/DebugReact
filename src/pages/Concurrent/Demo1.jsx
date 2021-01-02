import * as React from 'react'


const Item = ({i}) => {
  for (let i = 0; i< 999999;i++){}
  return <span key={i} style={{
    display: 'inline-block',
    width: '5px',
    height: '5px',
    backgroundColor: `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`
  }} />
}

export default () => {
  const n = 9000
  return (
    <div style={{fontSize:0}}>
      {[...new Array(n)].map((_, i) => {
        return <Item i={i} />
      })}
    </div>
  )
}