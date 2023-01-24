import { Navbar,Main,Feeds,Sign,Footer, Fields, Description,Blogs} from "./index"
import "./App.css"
import MyApp from "./Components/myApps/MyApp"
function App() {
  return (
    <div className="App container">
      <div className="Hero">
        <Navbar/>
        <Main/>
      </div>
      <Feeds/>
      <Fields/>
      <Description/>
      <MyApp/>
      <Sign/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
