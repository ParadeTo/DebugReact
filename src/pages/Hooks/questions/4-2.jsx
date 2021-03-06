import * as React from 'react'
import {useState, useEffect, useCallback, memo} from 'react'


function debounce(fn, ms) {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = null;
    }, ms);
  }
}

function useDebounce(fn, time) {
  return debounce(fn, time);
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
