import {React, ReactDOM} from './CONST'
import {useEffect, useReducer} from 'react'
// import App from './App'
import './index.css'
// import App from './pages/FirstRender'
import App from './pages/Concurrent'
console.log(App)
ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />)
