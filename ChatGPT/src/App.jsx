import { Navbar,Main,Feeds,Desc} from "./index"
import "./App.css"
function App() {
  return (
    <div className="App container">
      <div className="Hero">
        <Navbar/>
        <Main/>
      </div>
      <Feeds/>
      <Desc/>
    </div>
  )
}

export default App
