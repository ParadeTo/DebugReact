import {React, ReactDOM} from './CONST'
import './index.css'
import App from './pages/Concurrent'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />)
