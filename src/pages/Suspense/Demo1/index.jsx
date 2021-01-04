import * as React from 'react'
import {useState, Suspense} from 'react'
// import LazyComp from './LazyComp'
const LazyComp = React.lazy(() => import('./LazyComp'))
export default () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show)
        }}>
        加载
      </button>
      <Suspense maxDuration={100000} fallback={<div>Loading...</div>}>
        <LazyComp />
      </Suspense>
    </div>
  )
}
