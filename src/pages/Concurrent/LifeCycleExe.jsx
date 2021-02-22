import * as React from 'react'
import {useRef, useState, useEffect} from 'react'

class Item extends React.Component {
  UNSAFE_componentWillUpdate(nextProps){
    console.log(`item ${nextProps.i} will update`)
  }

  render() {
    for (let i = 0; i< 9999999;i++){}
    return <span key={this.props.i}>{this.props.children}</span>
  }
}


const App = () => {
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
        {Array.from(new Array(20)).map((v, index) => (
          <Item i={index}>{count}</Item>
        ))}
      </div>
    </div>
  );
};

export default App