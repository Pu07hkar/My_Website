import Home from "./Home/home.jsx"
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/courses.jsx"
import SignUp from "./components/Signup.jsx"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/sign" element={<SignUp/>}/>
   

    </Routes>
     
    </>
  )
}

export default App
