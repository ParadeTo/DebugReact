import * as React from 'react'
import {useState} from 'react'



// export default function App(props) {
//   const [num, setNum] = useState(0)

//   React.useEffect(() => {
//     const observer = new MutationObserver(function(mutationsList, observer) {
//       console.log(mutationsList)
//     })
//     const $num = document.querySelector('#num')
//     observer.observe($num, { attributes: true, childList: true, subtree: true })

//     setNum(num => num + 1)
//     setNum(num => num + 1)
//   }, [])

//   return (
//     <div id='num' className={num}>Num</div>
//   )
// }

export default function App(props) {
  const [num, setNum] = useState(0)

  React.useEffect(() => {
    const observer = new MutationObserver(function(mutationsList, observer) {
      console.log(mutationsList)
    })
    const $num = document.querySelector('#num')
    observer.observe($num, { attributes: true, childList: true, subtree: true })

    setTimeout(() => {
      setNum(num => num + 1)
      setNum(num => num + 1)
    })
  }, [])

  return (
    <div id='num' className={num}>Num</div>
  )
}
