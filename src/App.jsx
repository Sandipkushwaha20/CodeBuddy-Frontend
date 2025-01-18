import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {
  // const theam = "night";
  return (
    <>
      <BrowserRouter basename="/">
        <Routes >
          <Route path="/" element= {<Body/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1 className="text-4xl text-blue-700">Hello from CodeBuddy...</h1> */}
    </>
  )
}

export default App
