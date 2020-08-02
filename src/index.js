import { React, ReactDOM } from "./CONST"
import "./index.css"
import App from "./pages/FirstRender"

ReactDOM.render(<App />, document.getElementById("root"))

console.log("version", React.version) //sy-log
