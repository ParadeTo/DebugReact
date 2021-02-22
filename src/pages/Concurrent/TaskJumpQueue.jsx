import * as React from 'react'
import {useRef, useState, useEffect} from 'react'

const Item = ({i, children}) => {
  for (let i = 0; i< 9999999;i++){}
  return <span key={i}>{children}</span>
}

const App = () => {
  console.log('---------------------------render-------------------')
  const buttonRef = useRef(null);
  const [count, updateCount] = useState(0);

  const onClick = () => {
    updateCount(function updateFn(count) { return count + 2 });
  };

  useEffect(() => {
    const button = buttonRef.current;
    setTimeout(() => { updateCount(1)}, 1000);
    setTimeout(() => { button.click()}, 1040);
  }, []);

  return (
    <div>
      <button ref={buttonRef} onClick={onClick}>
        增加2
      </button>
      <div style={{wordWrap: 'break-word'}}>
        {Array.from(new Array(10)).map((v, index) => (
          <Item i={index}>{count}</Item>
        ))}
      </div>
    </div>
  );
};

export default App