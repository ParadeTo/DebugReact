import * as React from 'react'
import {useReducer} from 'react'

export default function App(props) {
  const [state, dispatch] = useReducer(function myReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + action.num};
      case 'decrement':
        return {count: state.count - action.num};
      default:
        throw new Error();
    }
  }, {count: 0})
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => {
        dispatch({type: 'increment', num: 1})
        dispatch({type: 'increment', num: 2})
      }}>+</button>
    </div>
  )
}


