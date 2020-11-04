import * as React from 'react'
import {useState, useEffect, useRef} from 'react'



function useDebounce(fn, time) {
  const { current } = useRef({});
  function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(fn.bind(undefined, ...args), time);
  }

  return f;
}

export default function() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const handleClick = useDebounce(function() {
    setCounter(counter + 1)
  }, 1000)

  useEffect(function() {
    const t = setInterval(() => {
      setCounter2(x => x + 1)
    }, 500);
    return clearInterval.bind(undefined, t)
  }, [])

  return <div style={{ padding: 30 }}>
    <button
      onClick={handleClick}
    >click</button>
    <div>{counter}</div>
    <div>{counter2}</div>
  </div>
}
