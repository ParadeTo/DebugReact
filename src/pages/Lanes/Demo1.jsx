import * as React from 'react'
import {unstable_useTransition} from 'react'

const tabs = ['Home', 'Profile', 'Groups', 'Video'].map((label, id) => {
  let resolve
  const tab = {
    id,
    label,
    promise: new Promise((res) => {
      resolve = res
    }),
    resolve() {
      tab.promise = null
      resolve()
    },
  }
  return tab
})

tabs[0].resolve()

function TabLink({tab, isActive, setActiveTab}) {
  const [startTransition, isPending] = unstable_useTransition({
    timeoutMs: 100000,
  })
  const onMouseDown = () => {
    startTransition(() => setActiveTab(tab))
  }

  let className = 'link'
  if (isActive) {
    className += ' active'
  } else if (isPending) {
    className += ' pending'
  }
  return (
    <button
      type='button'
      className={className}
      onClick={onMouseDown}
      onMouseDown={onMouseDown}>
      <div>{tab.label}</div>
      {isPending ? <div className='spinner' /> : null}
    </button>
  )
}

function ResolveLink({tab}) {
  return (
    <div>
      <button type='button' onClick={() => tab.resolve()}>
        Finish {tab.label}
      </button>
    </div>
  )
}

function Content({tab}) {
  const promise = tab.promise
  if (promise !== null) {
    throw promise
  }

  return <h1>{tab.label}</h1>
}

export default function App() {
  const [activeTab, setActiveTab] = React.useState(tabs[0])
  return (
    <div>
      <div className='navigation'>
        {tabs.map((tab) => (
          <TabLink
            key={tab.id}
            isActive={activeTab === tab}
            setActiveTab={setActiveTab}
            tab={tab}
          />
        ))}
      </div>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Content key={activeTab.id} tab={activeTab} />
      </React.Suspense>
      <div className='networkPanel'>
        {tabs.map((tab) => (
          <ResolveLink key={tab.id} tab={tab} />
        ))}
      </div>
    </div>
  )
}
