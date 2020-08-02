import * as React from "react"

export default () => {
  const [count, setCount] = React.useState(1)

  React.useLayoutEffect(() => {
    const now = Date.now()
    while (Date.now() - now < 2000) {
      console.log(1)
    }
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200
      setCount(randomNum)
    }
  }, [count])

  return <div onClick={() => setCount(0)}>{count}</div>
}
