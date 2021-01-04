import {React, ReactDOM} from './CONST'
import './index.css'
import App from './pages/Suspense'

// import {animate} from './utils'
// animate()

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />)

// import './pages/Scheduler'
